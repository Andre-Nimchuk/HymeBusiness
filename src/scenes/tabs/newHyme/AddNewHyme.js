import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

import BackArrowHeader from '../../../components/BackArrowHeader';
import FlatButton from '../../../components/FlatButton';
import Colors from '../../../styles/Colors';

export default function AddNewHyme({navigation}) {
  const {t} = useTranslation();
  const [text, onChangeText] = React.useState([
    {search: ''},
    {address: ''},
    {houseNumber: ''},
    {city: ''},
    {code: ''},
    {state: ''},
    {country: ''},
  ]);

  /* const input = [
    {
      title: 'Search',
      icon: () => <MoneyIcon style={{marginRight: 10}} />,
      onPress: () => {
        () => navigation.push('DetailsAppartment');
      },
    },
  ];

  const listItem = (item, index) => (
    <View>
      <Text style={styles.titleSt}>Search</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text.search}
      />
    </View>
  ); */

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <BackArrowHeader
        navigation={navigation}
        title="Add new hyme"
        color="#000"
        style={styles.transparent}
        rightElement={() => {
          return (
            <TouchableOpacity onPress={() => navigation.push('')}>
              <Text style={styles.addText}>{`${t('Save')}`}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.titleSt}>Search</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.search}
          />
          <Text style={styles.titleSt}>Street address</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.address}
          />
          <Text style={styles.titleSt}>House number</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.number}
          />
          <Text style={styles.titleSt}>City</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.city}
          />
          <Text style={styles.titleSt}>Postal Code</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.code}
          />
          <Text style={styles.titleSt}>State</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.state}
          />
          <Text style={styles.titleSt}>Country</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text.country}
          />
          <FlatButton
            title="+ Add"
            onPress={() => navigation.push('EditHymeDetails')}
            style={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 21,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  addText: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.primary,
    // fontFamily: 'poppins',
    fontWeight: '500',
  },
  titleSt: {
    fontSize: 12,
    lineHeight: 18,
    // fontFamily: 'roboto',
    fontWeight: '500',
    color: '#6D6D7A',
    marginTop: 18,
  },
  input: {
    height: 50,
    backgroundColor: '#F5F7F9',
    borderColor: '#1C1A2F',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 5,
  },
  buttonStyle: {
    borderRadius: 10,
    marginTop: 31,
    height: 50,
  },
});
