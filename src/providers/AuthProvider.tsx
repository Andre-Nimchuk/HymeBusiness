/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo, useReducer, useContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Auth from '@aws-amplify/auth';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {getMyUser} from '../graphql/queries';

import reducer, {initialState, LOGGED_IN, LOGGED_OUT} from './AuthReducer';

export const TOKEN_KEY = 'userToken';
export const USER_KEY = 'user';
export const keys = [TOKEN_KEY, USER_KEY];

interface ITenantPropertyObject {
  propertyId: string;
  location: any;
}

interface ITenantObject {
  [index: number]: ITenantPropertyObject;
}

interface IUserPropertyObject {
  tenant: ITenantObject;
}
interface IUserObject {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string;
  property: IUserPropertyObject;
}

interface IStateObject {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: IUserObject;
}

interface IHandleLogin {
  token: string;
}

interface IAuthContextData {
  state: IStateObject;
  user: IUserObject;
  authenticateUser: () => void;
  sendCustomChallengeAnswer: (
    signInUser: CognitoUser,
    authCode: string,
  ) => Promise<any>;
  resendSignupCode: (phoneNumber: string) => Promise<any>;
  getAuthState: () => void;
  handleLogin: ({token}: IHandleLogin) => void;
  handleLogout: () => void;
  updateUser: (userObject: object) => void;
  signInOrUp: (phoneNumber: string) => Promise<any>;
}

interface IGetMyUser {
  getMyUser: object;
}

interface IGetMyUserData {
  data: IGetMyUser;
}
const AuthContext = React.createContext<IAuthContextData>(
  {} as IAuthContextData,
);

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState || {});
  const [user, setUser] = useState({});

  const signIn = (phoneNumber: string) => Auth.signIn(phoneNumber);

  const handleLogin = async ({token}: IHandleLogin) => {
    console.log(token, 'tokentokentokentoken'); //token user
    try {
      if (!user) {
        const getUser: IGetMyUserData = await getMyUser();
        console.log(getUser, 'getUsergetUsergetUsergetUser');
        setUser(getUser.data.getMyUser);
      }

      await AsyncStorage.multiSet([
        [USER_KEY, JSON.stringify(user)],
        [TOKEN_KEY, token],
      ]);

      // DISPATCH TO REDUCER
      dispatch({type: LOGGED_IN, user});
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleLogout = async () => {
    try {
      // REMOVE DATA
      await Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
      await AsyncStorage.multiRemove(keys);

      // DISPATCH TO REDUCER
      dispatch({type: LOGGED_OUT, user});
    } catch (error) {
      throw new Error(error);
    }
  };

  const signUp = async (phoneNumber: string) => {
    const randomPass = Math.random().toString(36).slice(-8);

    console.log(
      Auth.signUp({
        username: phoneNumber,
        password: randomPass,
        attributes: {
          phone_number: `${phoneNumber}`,
          updated_at: `${Date.now()}`,
        },
      }),
      ' asdfadsfsafdsafadsfadsfasfdsfadsfasfsfdsf',
    );

    return Auth.signUp({
      username: phoneNumber,
      password: randomPass,
      attributes: {
        phone_number: `${phoneNumber}`,
        updated_at: `${Date.now()}`,
      },
    });
  };

  const signInOrUp = async (phoneNumber: string) =>
    new Promise((resolve, reject) =>
      signIn(phoneNumber)
        .then(() => {
          console.log(resolve, 'resolveresolveresolveresolve');
          console.log(reject, 'rejectrejectrejectrejectreject');
        })
        .then(res => resolve({user: res, type: 'signIn'}))
        .catch(async err => {
          console.log(err, 'error🧘‍♂️🧘‍♂️🧘‍♂️');
          if (err.code === 'NotAuthorizedException') {
            signUp(phoneNumber)
              .then(() =>
                signIn(phoneNumber)
                  .then(signInData =>
                    resolve({user: signInData, type: 'signUp'}),
                  )
                  .catch(signInErr => reject(signInErr)),
              )
              .catch(signupInErr => reject(signupInErr));
          } else {
            reject(err);
          }
        }),
    );

  const authenticateUser = async () =>
    Auth.currentAuthenticatedUser()
      .then(async auth =>
        handleLogin({
          token: auth.signInUserSession.accessToken.jwtToken,
        }),
      )
      .catch(err => console.log(err));

  const sendCustomChallengeAnswer = (
    signInUser: CognitoUser,
    authCode: string,
  ) => Auth.sendCustomChallengeAnswer(signInUser, authCode);

  const resendSignupCode = (phoneNumber: string) =>
    Auth.resendSignUp(phoneNumber);
  console.log(sendCustomChallengeAnswer, '218261623126368913129367');
  // Get Auth state
  const getAuthState = async () => {
    try {
      // GET TOKEN && USER
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const storedUser = await AsyncStorage.getItem(USER_KEY);

      setUser(JSON.parse(storedUser || '{}'));

      if (token !== null && user !== null) await handleLogin({token});
      else await handleLogout();

      return {token, user};
    } catch (error) {
      throw new Error(error);
    }
  };

  // UPDATE USER LOCAL STORAGE DATA AND DISPATCH TO REDUCER
  const updateUser = async (userObject: object) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(userObject));
      dispatch({type: LOGGED_IN, user: userObject}); // DISPATCH TO REDUCER
    } catch (error) {
      throw new Error(error);
    }
  };

  const value = useMemo(() => {
    return {
      state,
      user,
      authenticateUser,
      sendCustomChallengeAnswer,
      resendSignupCode,
      getAuthState,
      handleLogin,
      handleLogout,
      updateUser,
      signInOrUp,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]); /* */

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export {AuthContext, useAuth};

export default AuthProvider;
