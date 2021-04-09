import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox, Input} from '@ui-kitten/components';

import {useTranslation} from 'react-i18next';

import Colors from '../../styles/Colors';

import {useMutation} from '@apollo/client';

/* import BackArrowHeader from 'components/BackArrowHeader'; */
/* import FlatButton from 'components/FlatButton'; */

import {UPDATE_MY_PROFILE} from '../../graphql/mutations';
import {useAuth} from '../../providers/AuthProvider';
// import {useTranslation} from 'react-i18next';
// import {UPDATE_MY_PROFILE} from '../../graphql/mutations';
// import {useAuth} from '../../providers/AuthProvider';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 35,
  },
  h1: {
    marginBottom: 3,
    color: Colors.title,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
  },
  labelTextStyle: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.subTitle,
    fontFamily: 'roboto',
  },
  inputText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  wrongLabel: {
    fontSize: 12,
    fontFamily: 'roboto',
    color: Colors.error,
    lineHeight: 14,
  },
  checkbox: {
    marginTop: 28,
    marginBottom: 44,
    fontSize: 14,
    fontFamily: 'roboto',
    color: Colors.title,
    lineHeight: 20,
    paddingLeft: 7,
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    color: '#fff',
  },
});

export default function NameScreen({navigation}) {
  const {handleLogin} = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [wrongName, setWrongName] = useState(false);
  const [wrongSurName, setWrongSurName] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const {t} = useTranslation();

  const [updateMyProfile] = useMutation(UPDATE_MY_PROFILE, {
    onCompleted: () => {
      handleLogin({token: ''});
    },
  });

  const goToNextScreen = () => {
    updateMyProfile({
      variables: {
        input: {
          firstName,
          lastName,
          acceptTerms,
        },
      },
    });
  };

  const wrongText = () => {
    return <Text style={styles.wrongLabel}>{t('Wrong format')}</Text>;
  };

  return (
    <View style={styles.wrapper}>
      {/* <BackArrowHeader navigation={navigation} /> */}
      <View style={styles.container}>
        <Text style={styles.h1}>
          {/* {`${t(' */}What is your name{/* ')}`} */}
        </Text>
        <Text style={{marginBottom: 32}}>
          {t('We’re happy you to be part of our community :')}
        </Text>

        <Text style={styles.labelTextStyle}>{t('First Name')}</Text>
        <Input
          style={{
            borderColor: wrongName ? Colors.error : 'rgba(28,26,47, 0.1)',
          }}
          textStyle={styles.inputText}
          caption={wrongName ? wrongText() : null}
          placeholder="Enter your name"
          keyboardType="default"
          autoCapitalize="words"
          value={firstName}
          onChangeText={value => {
            setFirstName(value);
            if (value.includes('@')) setWrongName(true);
            else setWrongName(false);
          }}
        />
        <Text style={styles.labelTextStyle}>{'Last Name'}</Text>
        <Input
          style={{
            borderColor: wrongSurName ? Colors.error : 'rgba(28,26,47, 0.1)',
          }}
          textStyle={styles.inputText}
          caption={wrongSurName ? wrongText() : null}
          placeholder="Enter your surname"
          keyboardType="default"
          autoCapitalize="words"
          value={lastName}
          onChangeText={value => {
            setLastName(value);
            if (value.includes('@')) setWrongSurName(true);
            else setWrongSurName(false);
          }}
        />
        <CheckBox
          style={styles.checkbox}
          status="basic"
          checked={acceptTerms}
          onChange={() => {
            setAcceptTerms(!acceptTerms);
          }}>
          {`${t('I agree to')}`}
          <Text style={{color: Colors.pink}}>{t('Terms of Service')}</Text>
        </CheckBox>

        <FlatButton
          title="NEXT"
          disabled={
            wrongName ||
            wrongSurName ||
            firstName.length === 0 ||
            lastName.length === 0 ||
            !acceptTerms
          }
          onPress={() => goToNextScreen()}
          style={{
            opacity:
              !wrongName &&
              !wrongSurName &&
              firstName.length > 0 &&
              lastName.length > 0 &&
              acceptTerms
                ? 1
                : 0.7,
          }}
        />
      </View>
    </View>
  );
}
