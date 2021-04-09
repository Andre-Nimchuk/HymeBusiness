// Action Types
export const LOGGED_IN = `auth/LOGGED_IN`;
export const LOGGED_OUT = `auth/LOGGED_OUT`;

export const initialState = {
  isLoggedIn: false,
  isLoading: true,
  user: {},
};

interface IAction {
  user: object;
  type: string;
}

// REDUCER
const AuthReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGGED_IN: {
      const {user} = action;

      return {...state, isLoggedIn: true, user, isLoading: false};
    }

    case LOGGED_OUT: {
      return {...state, ...initialState};
    }

    default:
      return state;
  }
};

export default AuthReducer;
