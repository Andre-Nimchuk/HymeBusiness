import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Icon} from '@ui-kitten/components';

import Colors from '../styles/Colors';

function Search({style, title}) {
  const {t} = useTranslation();

  return (
    <View style={{...styles.header, ...style}}>
      <Text style={styles.title}>{t(title)}</Text>
      <Icon style={styles.icon} fill="#000" name="search" />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  header: {
    margin: 25,
    marginTop: Platform.OS === 'ios' ? 50 : 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: Colors.title,
    fontFamily: 'poppins',
    fontWeight: '700',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
