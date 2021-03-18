/* import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Colors from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
  },
  h1: {
    margin: 25,
    marginTop: Platform.OS === 'ios' ? 50 : 25,
    marginBottom: 3,
    color: Colors.title,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
  },
});

export default function ToDoScreen({navigation}) {
  const {t} = useTranslation();
  const listItem = (item, index) => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.h1}>{t('To-Do')}</Text>
        </View>
      </View>
    );
  };
} */
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
  /* {
    title: 'Witte de Withst..22',
    loacation: 'Rotterdam, Netherlands',
    fixes: 0,
  }, */
];

export default function HymeScreen({navigation}) {
  const {t} = useTranslation();
  const listItem = (item, index) => {
    return (
      <View>
        <Text>safjasflk</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Text style={styles.titleSt}>To-Do</Text>}
      renderItem={({item, index}) => listItem(item, index)}
      ListFooterComponent={<></>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleSt: {
    margin: 25,
    marginTop: Platform.OS === 'ios' ? 50 : 25,
    fontSize: 28,
    color: Colors.title,
    // fontFamily:ßß∂ß 'poppins',
    fontWeight: '700',
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
