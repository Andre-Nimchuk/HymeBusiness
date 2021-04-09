import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Text, Layout, Icon} from '@ui-kitten/components';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import BackArrowHeader from '../../components/BackArrowHeader';

import Colors from '../../styles/Colors';

import {useTranslation} from 'react-i18next';
import {CognitoUser} from '@aws-amplify/auth';
import {useAuth} from '../../providers/AuthProvider';

type RootStackParamList = {
  PhoneVerifyCode: {type: string; user: CognitoUser};
};

type PhoneVerifyCodeScreenRouteProp = RouteProp<
  RootStackParamList,
  'PhoneVerifyCode'
>;

type Props = {
  route: PhoneVerifyCodeScreenRouteProp;
  navigation: any;
};

export default function PhoneVerifyCodeScreen({route, navigation}: Props) {
  const {sendCustomChallengeAnswer, resendSignupCode, handleLogin} = useAuth();
  const {t} = useTranslation();

  const [disableResend, setDisableResend] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);
  const authType = route.params?.type;
  const user = route.params?.user;

  const verifySignupCode = (code: string) =>
    sendCustomChallengeAnswer(user, code)
      .then((auth: any) => {
        if (auth.attributes === undefined) {
          navigation.goBack();
          return;
        }

        if (authType === 'signUp') navigation.navigate('Name');
        else handleLogin({token: auth.signInUserSession.accessToken.jwtToken});
      })
      .catch((err: any) => {
        setWrongCode(true);
        console.log('error', err);
      });
  console.log(verifySignupCode);

  const resendVerificationCode = async () =>
    resendSignupCode(user.username)
      .then((res: any) => {
        console.log('code resent successfully', res);
      })
      .catch((e: any) => {
        console.log(e);
      });

  return (
    <Layout style={{flex: 1}}>
      <BackArrowHeader navigation={navigation} />
      <Layout style={styles.container}>
        <Text style={styles.h1}>{`${t('Phone verification')}`}</Text>
        <Text style={{marginBottom: 32}}>
          {`${t('Enter code your received to ')}`}
          <Text style={styles.labelTextStyle}>{user.username}</Text>
        </Text>

        <OTPInputView
          style={{width: '100%', height: 90}}
          pinCount={6}
          autoFocusOnLoad
          editable
          selectionColor="#4094E1"
          codeInputFieldStyle={[
            styles.cell,
            wrongCode ? styles.wrongCell : null,
          ]}
          codeInputHighlightStyle={styles.focusCell}
          onCodeChanged={() => setWrongCode(false)}
          onCodeFilled={code => {
            verifySignupCode(code);
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setDisableResend(true);
            setTimeout(() => setDisableResend(false), 3000);
            resendVerificationCode();
          }}
          disabled={disableResend}>
          <Layout style={styles.row}>
            <Text
              style={{
                ...styles.resendBtn,
                color: disableResend ? '#aaa' : Colors.pink,
              }}
              status="danger">
              {`${t('RESEND CODE')}`}
            </Text>
            <Icon
              style={styles.icon}
              fill={disableResend ? '#aaa' : Colors.pink}
              name="arrow-ios-forward-outline"
            />
          </Layout>
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
  },
  h1: {
    marginBottom: 3,
    color: Colors.title,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
  },
  labelTextStyle: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: '500',
    color: Colors.primary,
  },
  cell: {
    width: 42,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#E7E6E8',
    fontSize: 22,
    fontWeight: '700',
    color: Colors.title,
  },
  focusCell: {
    borderColor: Colors.primary,
    color: Colors.primary,
  },
  wrongCell: {
    borderColor: Colors.error,
    color: Colors.error,
  },
  icon: {
    width: 15,
    height: 15,
  },
  resendBtn: {
    fontFamily: 'roboto',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
