import React, {useState} from 'react';
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

import ButtonSwitch from '../../components/SwitchButton';

import AssignIcon from '../../assets/icons/svg-icons/AssignIcon';
import CheckContractIcon from '../../assets/icons/svg-icons/CheckContractIcon';
import DocumentIcon from '../../assets/icons/svg-icons/DetailsAvatar';
import MoneyIcon from '../../assets/icons/svg-icons/DetailsAvatar';
import CheckContract from '../../assets/icons/svg-icons/CheckContract';
import ApproveCheckIcon from '../../assets/icons/svg-icons/ApproveCheckIcon';
import Colors from '../../styles/Colors';

const items = [
  {
    title: 'Assign company',
    subTitle: 'Colorado 22, Amstelveen',
    icon: () => <AssignIcon style={{marginRight: 10}} />,
    onPress: () => {},
    data: '22 Apr',
  },
  {
    title: 'Check contract',
    subTitle: 'Witte de Withstraat 15, Amsterdam ',
    icon: () => (
      <CheckContractIcon style={{marginRight: 10}}></CheckContractIcon>
    ),
    onPress: () => {},
    data: '22 Apr',
  },
  {
    title: 'Approve check-in',
    subTitle: 'Witte de Withstraat 15, Amsterdam ',
    icon: () => <ApproveCheckIcon style={{marginRight: 10}}></ApproveCheckIcon>,
    onPress: () => {},
    data: '22 Apr',
  },
  {
    title: 'Sign contract',
    subTitle: 'Witte de Withstraat 15, Amsterdam ',
    icon: () => (
      <CheckContractIcon style={{marginRight: 10}}></CheckContractIcon>
    ),
    onPress: () => {},
    data: '22 Apr',
  },
];

export default function HymeDetailsScreen({navigation}) {
  const [active, setActive] = useState(true);
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <Text style={styles.titleSt}>To-Do</Text>
        <View style={styles.blockWithButtons}>
          <ButtonSwitch
            title="Current"
            style={active ? styles.activeBtn : styles.btn}
            textStyle={{color: active ? '#fff' : '#9CA0AE'}}
            onPress={() => setActive(true)}
          />
          <ButtonSwitch
            title="Completed"
            style={!active ? styles.activeBtn : styles.btn}
            textStyle={{color: !active ? '#fff' : '#9CA0AE'}}
            onPress={() => setActive(false)}
          />
        </View>
        <View>
          {items.map(item => (
            <TouchableOpacity onPress={item.onPress}>
              <View style={styles.locBlock}>
                {item.icon()}
                <View style={{flex: 1}}>
                  <Text style={styles.generTitle}>{t(item.title)}</Text>
                  <Text style={styles.subTitle}>{t(item.subTitle)}</Text>
                </View>
                <Text style={styles.dataSt}>{t(item.data)}</Text>
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
    backgroundColor: '#fff',
    flex: 1,
  },
  titleSt: {
    marginHorizontal: 25,
    marginTop: 70,
    fontSize: 28,
    color: Colors.title,
    fontFamily: 'poppins',
    fontWeight: '700',
  },
  generTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'poppins',
    lineHeight: 27.39,
    color: '#1C1A2F',
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#F5F7F9',
  },
  checkContract: {
    zIndex: 10,
  },
  subTitle: {
    color: '#6D6D7A',
    lineHeight: 18.5,
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 12,
  },
  blockWithButtons: {
    paddingLeft: 13,
    paddingRight: 21,
    paddingVertical: 21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {},
  locBlock: {
    marginHorizontal: 21,
    paddingLeft: 17,
    height: 98,
    paddingRight: 21,
    paddingVertical: 21,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
    fontFamily: 'poppins',
    fontWeight: '600',
    lineHeight: 33,
  },
  subTitle: {
    fontSize: 12,
    color: '#6D6D7A',
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 18,
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
  transparent: {
    backgroundColor: 'transparent',
  },
  dataSt: {
    fontSize: 12,
    lineHeight: 18.26,
    fontWeight: '400',
    color: '#B9B6B8',
    marginBottom: 22,
  },
});
