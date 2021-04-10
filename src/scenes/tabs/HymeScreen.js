import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

import Colors from '../../styles/Colors';

import Search from '../../components/Search';
import FlatButton from '../../components/FlatButton';

import HymeAvatarPink from '../../assets/icons/svg-icons/HymeAvatarPink';
import HymeAvatarBlue from '../../assets/icons/svg-icons/HymeAvatarBlue';

const items = [
  {
    title: 'Colorado 22',
    loacation: 'Amstelveen Netherlands',
    fixes: 5,
  },
  {
    title: 'Witte de Withst..22',
    loacation: 'Rotterdam, Netherlands',
    fixes: 0,
  },
];

export default function HymeScreen({navigation}) {
  const {t} = useTranslation();

  const listItem = (item, index) => (
    <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
      <View style={styles.locBlock}>
        {item.fixes > 0 ? (
          <HymeAvatarPink style={{marginRight: 10}} />
        ) : (
          <HymeAvatarBlue style={{marginRight: 10}} />
        )}
        <View style={{flex: 1}}>
          <Text style={styles.generTitle}>{t(item.title)}</Text>
          <Text style={styles.subTitle}>{t(item.loacation)}</Text>
          {item.fixes > 0 && (
            <Text style={styles.errorTitle}>
              {item.fixes + t(' fixed needed')}
            </Text>
          )}
        </View>
        <Icon
          style={styles.icon}
          fill="#000"
          name="arrow-ios-forward-outline"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={items}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Search style={styles.searchContainer} title={'Hyme'} />
      }
      renderItem={({item, index}) => listItem(item, index)}
      ListFooterComponent={
        <FlatButton
          title="+ Add new Hyme"
          onPress={() => navigation.push('AddNewHyme')}
          style={styles.buttonStyle}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginHorizontal: 25,
    marginTop: 70,
  },
  generTitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'poppins',
    lineHeight: 33.5,
    color: '#1C1A2F',
  },
  subTitle: {
    color: '#6D6D7A',
    lineHeight: 18.7,
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 12,
  },
  errorTitle: {
    color: '#FF6F66',
    lineHeight: 18.5,
    fontSize: 12,
    fontFamily: 'roboto',
    fontWeight: '400',
  },
  locBlock: {
    marginHorizontal: 21,
    paddingLeft: 17,
    paddingRight: 21,
    paddingVertical: 21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    shadowColor: 'rgba(33, 32, 41, 0.03)',
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10.32,
    elevation: 11,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  pressStyle: {
    marginHorizontal: 21,
    paddingLeft: 17,
    paddingRight: 21,
    paddingVertical: 21,
  },
  buttonStyle: {
    marginTop: 25,
    marginHorizontal: 21,
    height: 50,
  },
});
