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
import FlatButton from '../../../components/FlatButton';
import BackArrow from '../../../assets/icons/svg-icons/BackArrow';
import DetailsAvatar from '../../../assets/icons/svg-icons/DetailsAvatar';
import FixItIcon from '../../../assets/icons/svg-icons/FixItIcon';
import DocumentIcon from '../../../assets/icons/svg-icons/DocumentIcon';
import MoneyIcon from '../../../assets/icons/svg-icons/MoneyIcon';

const items = [
  {
    title: 'Details',
    subTitle: 'Amstelveen Netherlands',
    icon: () => <DetailsAvatar style={{marginRight: 10}} />,
    onPress: () => {},
  },
  {
    title: 'Lease',
    subTitle: 'Rent & check-in contracts',
    icon: () => <DocumentIcon style={{marginRight: 10}} />,
  },
  {
    title: 'Fix it',
    subTitle: 'No items to fix',
    icon: () => <FixItIcon style={{marginRight: 10}} />,
  },
  {
    title: 'Finances',
    subTitle: '$850 paid for May',
    icon: () => <MoneyIcon style={{marginRight: 10}} />,
  },
];

export default function DetailsAppartmentScreen({navigation}) {
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
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <BackArrowHeader navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.titleSt}>Colorado 22</Text>
            <Text style={styles.subTitle}>Amstelveen Netherlands, #12345</Text>
          </View>

          <View style={styles.informationTab}>
            <Text style={styles.textInformationTab}>{`${t(
              'Room Details',
            )}`}</Text>
            <TouchableOpacity onPress={() => navigation.push('')}>
              <Text style={styles.addText}>{`${t('+Add Room')}`}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.informationTab}>
            <Text style={styles.textInformationTab}>{`${t(
              'Information',
            )}`}</Text>
          </View>

          <View style={styles.informationTab}>
            <Text style={styles.textInformationTab}>{`${t('Type')}`}</Text>
          </View>

          <View>
            <View style={styles.informationTab}>
              <Text style={styles.textInformationTab}>{`${t(
                'Room Details',
              )}`}</Text>
              <View>
                <Text style={styles.addText}>{`${t('+Add Room')}`}</Text>
              </View>
            </View>
          </View>

          <View style={styles.firstSectionContainer}>
            <FlatButton
              title="Edit details"
              onPress={() => navigation.push('EditHymeDetails')}
              style={styles.buttonStyle}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 25,
  },
  titleSt: {
    // marginTop: Platform.OS === 'ios' ? 50 : 25,
    fontSize: 28,
    /* color: Colors.title, */
    // fontFamily: 'poppins',
    fontWeight: '700',
  },
  subTitle: {
    color: '#6D6D7A',
    lineHeight: 18.5,
    /* fontFamily: 'roboto', */
    fontWeight: '400',
    fontSize: 12,
  },
  icon: {
    width: 24,
    height: 24,
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
  transparent: {
    backgroundColor: 'transparent',
  },
  informationTab: {
    height: 34,
    backgroundColor: '#F5F7F9',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 29,
    paddingRight: 13,
  },
  textInformationTab: {
    color: '#BAB9BF',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    // fontFamily: 'poppins',
  },
  addText: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.primary,
    // fontFamily: 'roboto',
    fontWeight: '500',
  },
  firstSectionContainer: {
    paddingHorizontal: 31,
    marginBottom: 7,
  },
  buttonStyle: {
    borderRadius: 10,
    marginTop: 31,
    height: 50,
  },
});
