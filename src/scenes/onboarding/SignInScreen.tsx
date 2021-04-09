/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import CarrierInfo from 'react-native-carrier-info';
import {Text, Layout} from '@ui-kitten/components';

import FlatButton from '../../components/FlatButton';

import Colors from '../../styles/Colors';

import {useTranslation} from 'react-i18next';
import {useAuth} from '../../providers/AuthProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 70,
    marginBottom: 3,
    color: Colors.title,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(28,26,47, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(28,26,47, 0.1)',
    paddingLeft: 15,
    paddingVertical: 6,
    marginLeft: 15,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
});

export default function SignInScreen() {
  const {signInOrUp} = useAuth();
  const {navigate} = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('+31' as string);
  const [countryCode, setCountryCode] = useState<CountryCode>('NL');
  const [disableBtn, setDisableBtn] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    const carrierInfoAsync = async () => {
      CarrierInfo.isoCountryCode()
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
    };

    carrierInfoAsync();
  }, []);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setPhoneNumber(`+${country.callingCode}`);
  };

  const goToNextScreen = async (user: any, type: any) =>
    navigate('PhoneVerifyCode', {
      type,
      user,
    });

  const signIn = async () => {
    if (!phoneNumber) return false;

    await signInOrUp(phoneNumber)
      .then(({user, type}) => {
        goToNextScreen(user, type);
      })
      .catch((err: any) => console.log(err, 'signInError'));
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>{`${t('Welcome to Hyme')}`}</Text>

      <Text appearance="hint" style={{marginBottom: 32}}>
        {`${t('Insert your phone number to continue')}`}
      </Text>

      <Layout style={styles.row}>
        <CountryPicker
          withFlag
          withFilter
          withAlphaFilter
          withCallingCode
          withFlagButton
          withEmoji={false}
          {...{
            countryCode,
            onSelect,
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={value => setPhoneNumber(value)}
        />
      </Layout>

      <Layout style={{height: 35}} />

      <FlatButton
        title="Next"
        disabled={disableBtn}
        onPress={() => {
          setDisableBtn(true);
          setTimeout(() => setDisableBtn(false), 3000);
          signIn();
        }}
        style={styles.buttonStyle}
      />
    </Layout>
  );
}
