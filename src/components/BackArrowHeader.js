import React from 'react';
import {StyleSheet, Platform, TouchableOpacity, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import BackArrow from '../assets/icons/svg-icons/BackArrow';

function BackArrowHeader({
  navigation,
  title,
  subTitle,
  style,
  color,
  onLeftPress,
  backComponent,
  rightElement,
}) {
  const {t} = useTranslation();

  return (
    <View style={{...styles.header, ...style}}>
      <View style={styles.leftElement}>
        <TouchableOpacity
          onPress={() => {
            if (onLeftPress) onLeftPress();
            else navigation.goBack();
          }}>
          {backComponent ? backComponent() : <BackArrow />}
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        {title ? (
          <Text style={[styles.title, {color: color || '#27283B'}]}>
            {t(title)}
          </Text>
        ) : null}
        {subTitle ? (
          <Text style={[styles.subTitle, {color: color || '#27283B'}]}>
            {t(subTitle)}
          </Text>
        ) : null}
      </View>
      <View style={styles.rightElement}>{rightElement && rightElement()}</View>
    </View>
  );
}

export default BackArrowHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 33 : 0,
    height: 70,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: 14,
  },
  subTitle: {
    fontFamily: 'roboto',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: '#5B5C6B',
    opacity: 0.5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  leftElement: {
    width: '20%',
    backgroundColor: 'transparent',
  },
  rightElement: {
    width: '20%',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
});
