import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

import BackArrowHeader from '../../../components/BackArrowHeader';
import BackArrowWhite from '../../../assets/icons/svg-icons/BackArrowWhite';
import DetailsAvatar from '../../../assets/icons/svg-icons/DetailsAvatar';
import FixItIcon from '../../../assets/icons/svg-icons/FixItIcon';
import DocumentIcon from '../../../assets/icons/svg-icons/DocumentIcon';
import MoneyIcon from '../../../assets/icons/svg-icons/MoneyIcon';

const items = [
  {
    title: 'Details',
    subTitle: 'Amstelveen Netherlands',
    icon: () => <DetailsAvatar style={{marginRight: 10}} />,
    onPress: 'DetailsAppartment',
  },
  {
    title: 'Lease',
    subTitle: 'Rent & check-in contracts',
    icon: () => <DocumentIcon style={{marginRight: 10}} />,
    onPress: () => {
      () => navigation.push('DetailsAppartment');
    },
  },
  {
    title: 'Fix it',
    subTitle: 'No items to fix',
    icon: () => <FixItIcon style={{marginRight: 10}} />,
    onPress: () => {
      () => navigation.push('DetailsAppartment');
    },
  },
  {
    title: 'Finances',
    subTitle: '$850 paid for May',
    icon: () => <MoneyIcon style={{marginRight: 10}} />,
    onPress: () => {
      () => navigation.push('DetailsAppartment');
    },
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
          {items.map(item => (
            <TouchableOpacity onPress={() => navigation.push(item.onPress)}>
              <View style={styles.locBlock}>
                <View style={styles.iconsMenu}>{item.icon()}</View>
                <View style={{flex: 1}}>
                  <Text style={styles.generTitle}>{t(item.title)}</Text>
                  <Text style={styles.subTitle}>{t(item.subTitle)}</Text>
                </View>
                <Icon
                  style={styles.icon}
                  fill="#000"
                  name="arrow-ios-forward-outline"
                />
              </View>
            </TouchableOpacity>
          ))}
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  iconsMenu: {
    paddingBottom: 5,
    marginRight: 10,
  },
  generTitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'poppins',
    lineHeight: 21.31,
    color: '#1C1A2F',
  },
  subTitle: {
    color: '#6D6D7A',
    lineHeight: 18.5,
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 12,
  },
  locBlock: {
    marginHorizontal: 21,
    marginTop: 23,
    paddingLeft: 17,
    paddingRight: 21,
    paddingVertical: 21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 8,
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
});
