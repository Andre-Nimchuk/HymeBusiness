import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../styles/Colors';
import {useTranslation} from 'react-i18next';

import Search from '../../components/Search';

const items = [
  {
    /* icon: () => <DocumentIcon style={{marginRight: 10}} />, */
    title: 'Jessica Harper',
    loacation: `Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum 
#hashtag #services`,
    fixes: 5,
  },
  {
    /* icon: () => <DocumentIcon style={{marginRight: 10}} />, */
    title: 'Witte de Withst..22',
    loacation: 'Rotterdam, Netherlands',
    fixes: 0,
  },
  {
    /* icon: () => <DocumentIcon style={{marginRight: 10}} />, */
    title: 'Colorado',
    loacation: 'Amstelveen Netherlands',
    fixes: 1,
  },
  {
    /* icon: () => <DocumentIcon style={{marginRight: 10}} />, */
    title: 'Witte de Withst..22',
    loacation: 'Rotterdam, Netherlands',
    fixes: 0,
  },
];

export default function FeedScreen({navigation}) {
  const {t} = useTranslation();

  const listItem = (item, index) => (
    <TouchableOpacity onPress={() => navigation.push('HymeDetails')}>
      <View style={styles.locBlock}>
        <View style={{flex: 1}}>
          <Text style={styles.generTitle}>{t(item.title)}</Text>
          <Text style={styles.subTitle}>{t(item.loacation)}</Text>
          {item.fixes > 0 && (
            <Text style={styles.errorTitle}>
              {item.fixes + t(' fixed needed')}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={items}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Search style={styles.headerElement} title={'Feed'} />
      }
      renderItem={({item, index}) => listItem(item, index)}
      /* ListFooterComponent={} */
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerElement: {
    marginHorizontal: 25,
    marginTop: 70,
  },
  generTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'poppins',
    lineHeight: 27.39,
    color: '#1C1A2F',
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
    marginBottom: 18,
  },
});
