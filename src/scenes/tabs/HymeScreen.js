import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

import Colors from '../../styles/Colors';

import Search from '../../components/Search';

import HymeAvatarPink from '../../assets/icons/svg-icons/HymeAvatarPink';
import HymeAvatarBlue from '../../assets/icons/svg-icons/HymeAvatarBlue';
import FlatButton from '../../components/FlatButton';

const items = [
  {
    title: 'Colorado',
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
  const listItem = (item, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
          <View style={styles.locBlock}>
            {item.fixes > 0 ? (
              <HymeAvatarPink style={{marginRight: 10}} />
            ) : (
              <HymeAvatarBlue style={{marginRight: 10}} />
            )}
            <View style={{flex: 1}}>
              <Text style={{fontSize: 22, fontWeight: '600'}}>
                {t(item.title)}
              </Text>
              <Text style={{color: '#6D6D7A'}}>{t(item.loacation)}</Text>
              {item.fixes > 0 && (
                <Text style={{color: '#FF6F66'}}>
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
      </>
    );
  };

  return (
    <>
      <FlatList
        data={items}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Search title={'Hyme'} />}
        renderItem={({item, index}) => listItem(item, index)}
        ListFooterComponent={
          <FlatButton
            title="+ Add new Hyme"
            onPress={() => {}}
            style={styles.buttonStyle}
          />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  h1: {
    marginTop: Platform.OS === 'ios' ? 50 : 25,
    marginBottom: 3,
    color: Colors.title,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
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
  },
});
