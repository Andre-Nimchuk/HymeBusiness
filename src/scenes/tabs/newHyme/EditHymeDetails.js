import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

import BackArrowHeader from '../../../components/BackArrowHeader';
import FlatButton from '../../../components/FlatButton';
import Colors from '../../../styles/Colors';

export default function EditHymeDetails({navigation}) {
  const {t} = useTranslation();
  const [text, onChangeText] = React.useState([
    {address: ''},
    {houseNumber: ''},
    {city: ''},
    {postalCode: ''},
    {code: ''},
    {state: ''},
    {country: ''},
  ]);
  const [inputeri, onChangeInput] = useState('');

  const items = [
    {
      title: 'Street address',
      //   input: () => (
      //     <TextInput
      //       style={styles.input}
      //       onChangeText={onChangeText}
      //       value={text.houseNumber}
      //     />
      //   ),
    },
    {
      title: 'House number',
      /*  input: () => (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text.houseNumber}
        />
      ), */
    },
    {
      title: 'City',
      //   input: () => (
      //     <TextInput
      //       style={styles.input}
      //       onChangeText={onChangeText}
      //       value={text.houseNumber}
      //     />
      //   ),
    },
    {
      title: 'Postal Code',
      //   input: () => (
      //     <TextInput
      //       style={styles.input}
      //       onChangeText={onChangeText}
      //       value={text.houseNumber}
      //     />
      //   ),
    },
    {
      title: 'State',
      //   input: () => (
      //     <TextInput
      //       style={styles.input}
      //       onChangeText={onChangeText}
      //       value={text.houseNumber}
      //     />
      //   ),
    },
    {
      title: 'Country',
      //   input: () => (
      //     <TextInput
      //       style={styles.input}
      //       onChangeText={onChangeText}
      //       value={text.houseNumber}
      //     />
      //   ),
    },
  ];
  const input = [
    {title: 'Construction year'},
    {title: 'Surface area'},
    {title: 'Nr of Rooms'},
    {title: 'Nr of Bathrooms'},
    {title: 'Nr of Bedrooms'},
    {title: 'Number of floors'},
    {title: 'Number of parkings'},
    {title: 'Unit type'},
    {title: 'Property type'},
    {title: 'Notes'},
  ];

  const ListItem = (item, index) => (
    <View style={styles.firstSectionContainer}>
      <Text style={styles.titleSt}>{item.title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text.houseNumber}
      />
    </View>
  );

  const ListInput = (item, index) => (
    <View style={styles.firstSectionContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log(inputeri);
        }}>
        <Text style={styles.titleSt}>{item.title}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={inputer => {
          onChangeInput(...inputeri, inputer);
          console.log(inputeri);
        }}
      />
    </View>
  );

  const FlatListInput = (item, index) => (
    <FlatList
      data={input}
      keyExtractor={item => item.id}
      style={styles.container}
      renderItem={({item, index}) => ListInput(item, index)}
      ListFooterComponent={
        <View style={styles.firstSectionContainer}>
          <FlatButton
            title="+ Add"
            onPress={() => navigation.push('')}
            style={styles.buttonStyle}
          />
        </View>
      }
    />
  );

  return (
    <>
      <View style={styles.container}>
        <BackArrowHeader
          navigation={navigation}
          title="Edit Hyme details"
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
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={items}
          style={styles.container}
          renderItem={({item, index}) => ListItem(item, index)}
          ListFooterComponent={
            <>
              <View style={styles.informationTab}>
                <Text style={styles.textInformationTab}>{`${t(
                  'Information',
                )}`}</Text>
              </View>
              <FlatListInput />
            </>
          }
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  firstSectionContainer: {
    paddingHorizontal: 21,
    marginBottom: 7,
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
  informationTab: {
    height: 34,
    backgroundColor: '#F5F7F9',
    justifyContent: 'center',
    paddingLeft: 29,
  },
  textInformationTab: {
    color: '#BAB9BF',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    // fontFamily: 'poppins',
  },
});
