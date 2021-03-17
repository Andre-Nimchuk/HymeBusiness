import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
  },
  h1: {
    marginBottom: 3,
    color: Colors.title,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
  },
});

export default function HymeScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.h1}>{t('HymeScreen')}</Text>
      </View>
    </View>
  );
}
