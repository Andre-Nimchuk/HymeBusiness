import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import Colors from '../styles/Colors';

const ButtonSwitch = ({
  leftElement,
  rightElement,
  onPress,
  disabled,
  style,
  textStyle,
  title,
}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.switchsButton}>
      <View
        style={{
          ...styles.btn,
          ...style,
          justifyContent:
            leftElement || rightElement ? 'space-between' : 'center',
        }}>
        {leftElement || rightElement ? (
          <View style={styles.side}>{leftElement && leftElement()}</View>
        ) : null}
        <Text style={{...styles.text, ...textStyle}}>{`${t(title)}`}</Text>
        {leftElement || rightElement ? (
          <View style={styles.side}>{rightElement && rightElement()}</View>
        ) : null}
      </View>
    </TouchableOpacity>
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
    justifyContent: 'center',
  },
  switchsButton: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FDFDFD',
    // fontFamily: 'roboto',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default ButtonSwitch;
