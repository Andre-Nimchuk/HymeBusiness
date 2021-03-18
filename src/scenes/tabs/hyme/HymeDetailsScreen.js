import React from 'react';
import {
  ImageBackground,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

import Colors from '../../../styles/Colors';

import BackArrowHeader from '../../../components/BackArrowHeader';
import BackArrowWhite from '../../../assets/icons/svg-icons/BackArrowWhite';
import HymeAvatarPink from '../../../assets/icons/svg-icons/DetailsAvatar';

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

export default function HymeDetailsScreen({navigation}) {
  const {t} = useTranslation();
  const ListItem = ({title, value}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{`${t(title)}`}</Text>
        {value && <Text style={styles.label}>{value}</Text>}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            source={require('../../../assets/icons/images/home-illustration.png')}
            style={styles.headerImage}>
            <BackArrowHeader
              navigation={navigation}
              title="My Hyme"
              color="#fff"
              style={styles.transparent}
              backComponent={() => <BackArrowWhite />}
            />
          </ImageBackground>
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
            <View style={styles.locBlock}>
              <HymeAvatarPink style={{marginRight: 10}} />
              <View style={{flex: 1}}>
                <Text style={styles.generTitle}>{t('Details')}</Text>
                <Text style={styles.subTitle}>
                  {t('Amstelveen Netherlands')}
                </Text>
              </View>
              <Icon
                style={styles.icon}
                fill="#000"
                name="arrow-ios-forward-outline"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
            <View style={styles.locBlock}>
              <HymeAvatarPink style={{marginRight: 10}} />
              <View style={{flex: 1}}>
                <Text style={styles.generTitle}>{t('Lease')}</Text>
                <Text style={styles.subTitle}>
                  {t('Rent & check-in contracts')}
                </Text>
              </View>
              <Icon
                style={styles.icon}
                fill="#000"
                name="arrow-ios-forward-outline"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
            <View style={styles.locBlock}>
              <HymeAvatarPink style={{marginRight: 10}} />
              <View style={{flex: 1}}>
                <Text style={styles.generTitle}>{t('Fix it')}</Text>
                <Text style={styles.subTitle}>{t('No items to fix')}</Text>
              </View>
              <Icon
                style={styles.icon}
                fill="#000"
                name="arrow-ios-forward-outline"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
            <View style={styles.locBlock}>
              <HymeAvatarPink style={{marginRight: 10}} />
              <View style={{flex: 1}}>
                <Text style={styles.generTitle}>{t('Finances')}</Text>
                <Text style={styles.subTitle}>{t('$850 paid for May')}</Text>
              </View>
              <Icon
                style={styles.icon}
                fill="#000"
                name="arrow-ios-forward-outline"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 325,
  },
  contentContainer: {
    flex: 1,
    top: -60,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingLeft: 28,
    backgroundColor: '#fff',
  },
  generTitle: {
    fontSize: 14,
    fontWeight: '500',
    /* fontFamily: 'poppins', */
    lineHeight: 21.31,
    color: '#1C1A2F',
  },
  subTitle: {
    color: '#6D6D7A',
    lineHeight: 18.5,
    /* fontFamily: 'roboto', */
    fontWeight: '400',
    fontSize: 12,
  },
  errorTitle: {
    color: '#FF6F66',
    lineHeight: 18.5,
    fontSize: 12,
    /* fontFamily: 'roboto', */
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7.68,
    elevation: 11,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    marginTop: 25,
    fontSize: 22,
    color: '#1C1A2F',
    /* fontFamily: 'poppins', */
    fontWeight: '600',
    lineHeight: 33,
  },
  subTitle: {
    fontSize: 12,
    color: '#6D6D7A',
    /* fontFamily: 'roboto', */
    fontWeight: '400',
    lineHeight: 18,
  },
  sectionTitle: {
    marginTop: 29,
    marginBottom: 23,
    fontSize: 14,
    color: '#BAB9BF',
    fontFamily: 'poppins',
    fontWeight: '500',
    lineHeight: 21,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    height: 34,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f2',
  },
  label: {
    fontSize: 14,
    color: '#1C1A2F',
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 21,
  },
  item: {
    marginRight: 15,
  },
  itemTitle: {
    fontSize: 14,
    color: '#1C1A2F',
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 34,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});
