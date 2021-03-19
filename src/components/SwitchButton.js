import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import Colors from '../styles/Colors';

const ButtonSwitch = ({style, titleLeft, titleRight}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.switchsButton}>
      <View style={styles.btn}>
        <Text style={styles.text}>{t(titleLeft)}</Text>
      </View>
      <View style={styles.btn}>
        <Text style={{...styles.text}}>{t(titleRight)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    marginLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
  },
  switchsButton: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    // fontFamily: 'roboto',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ButtonSwitch;
