/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import {Icon} from '@ui-kitten/components';
import FlatButton from '../../components/FlatButton';
import Colors from '../../styles/Colors';
import CarrierInfo from 'react-native-carrier-info';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../providers/AuthProvider';

export default function SignInScreen({navigation}) {
  const {signInOrUp} = useAuth();
  const {navigate} = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('+380');
  const [countryCode, setCountryCode] = useState('UA');
  const [disableBtn, setDisableBtn] = useState(false);

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

  const onSelect = country => {
    setCountryCode(country.cca2);
    setPhoneNumber(`+${country.callingCode}`);
  };

  const goToNextScreen = async (user, type) => {
    console.log(user, 'useruseruseruseruseruseruseruseruser');
    console.log(type, 'typetypetypetypetypetype');
    navigate('PhoneVerifyCode', {
      type,
      user,
    });
  };

  const signIn = async () => {
    if (!phoneNumber) return false;

    await signInOrUp(phoneNumber)
      .then(({user, type}) => {
        goToNextScreen(user, type);
      })
      .catch(err => console.log(err, 'signInError'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hyme</Text>
      <Text appearance="hint" style={{marginBottom: 32}}>
        Insert your phone number to continue
      </Text>

      <View style={styles.row}>
        <View style={styles.contrySection}>
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
        </View>
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
          setDisableBtn(true);
          setTimeout(() => setDisableBtn(false), 3000);
          signIn();
        }}
        style={styles.buttonStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
  },
  contrySection: {
    flexDirection: 'row',
    alignItems: 'center',
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
