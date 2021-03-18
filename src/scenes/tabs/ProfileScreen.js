import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

export default function ProfileScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.h1}>{t('ProfileScreen')}</Text>
      </View>
    </View>
  );
}
