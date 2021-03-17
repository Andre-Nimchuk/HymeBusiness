/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import FlatButton from '../../components/FlatButton';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';
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

export default function SignInScreen({navigation}) {
  const {navigate} = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('+380');
  const [countryCode, setCountryCode] = useState('UA');

  const onSelect = country => {
    setCountryCode(country.cca2);
    setPhoneNumber(`+${country.callingCode}`);
  };

  const goToNextScreen = async (user: any, type: any) =>
    navigate('PhoneVerifyCode', {
      type,
      user,
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hyme</Text>

      <Text appearance="hint" style={{marginBottom: 32}}>
        Insert your phone number to continue
      </Text>

      <View style={styles.row}>
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
      </View>

      <View style={{height: 35}} />

      <FlatButton
        title="Next"
        onPress={() => {
          NavigationPreloadManager.push('PhoneVerifyCode');
        }}
        style={styles.buttonStyle}
      />
    </View>
  );
}
