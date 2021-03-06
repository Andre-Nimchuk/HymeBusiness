import React from 'react';
import {
  ImageBackground,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
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

export default function DetailsAppartmentScreen({navigation}) {
  const items = [
    {
      title: 'Construction year',
      subTitle: '1980',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Surface area',
      subTitle: '130',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Rooms',
      subTitle: '5',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Bathrooms',
      subTitle: '2',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Bedrooms',
      subTitle: '4',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Floors',
      subTitle: '2',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Parkings',
      subTitle: '2',
      underLine: () => {},
    },
  ];

  const types = [
    {
      title: 'Unit',
      subTitle: 'house',
      underLine: () => <View style={styles.underLine}></View>,
    },
    {
      title: 'Property',
      subTitle: 'single',
      underLine: () => {},
    },
  ];

  const room = [
    {
      title: 'Living room',
    },
    {title: 'Bedroom'},
    {title: 'Hall'},
  ];

  const {t} = useTranslation();

  const roomItem = ({item}) => {
    /*  const imageUrl = `${REACT_APP_MEDIA_URL}/${item.image.file.key}`; */
    return (
      <TouchableOpacity
        onPress={() => navigation.push('RoomDetails', {room: item})}>
        <View style={styles.item}>
          {item.image && (
            <Image source={{uri: image}} style={styles.roomImage} />
          )}
          <Text style={styles.itemTitle}>{`${t(item.title)}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ListItem = (item, index) => {
    console.log(item);
    return (
      <>
        <View style={styles.informationContainer}>
          <View style={styles.textLineStyle}>
            <Text style={styles.informationTitle}>{item.title}</Text>
            <Text style={styles.informationSubTitle}>{item.subTitle}</Text>
          </View>
        </View>
        {item.underLine()}
      </>
    );
  };

  const TypeItem = (item, index) => {
    console.log(item);
    return (
      <>
        <View style={styles.informationContainer}>
          <View style={styles.textLineStyle}>
            <Text style={styles.informationTitle}>{item.title}</Text>
            <Text style={styles.informationSubTitle}>{item.subTitle}</Text>
          </View>
        </View>
        {item.underLine()}
      </>
    );
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BackArrowHeader navigation={navigation} />
          <View style={styles.container}>
            <Text style={styles.titleSt}>Colorado 22</Text>
            <Text style={styles.subTitle}>Amstelveen Netherlands, #12345</Text>
          </View>

          <View style={styles.roomDetails}>
            <Text style={styles.textInformationTab}>{`${t(
              'Room Details',
            )}`}</Text>
            <TouchableOpacity onPress={() => navigation.push('')}>
              <Text style={styles.addText}>{`${t('+Add Room')}`}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.horizontalSloder}
            horizontal
            data={room}
            renderItem={roomItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.informationTab}>
            <Text style={styles.textInformationTab}>{`${t(
              'Information',
            )}`}</Text>
          </View>

          <View style={styles.informationContainer}>
            <Text style={{marginBottom: 10}}>Energy label</Text>
          </View>
          <View style={styles.underLine}></View>

          <FlatList
            data={items}
            renderItem={({item, index}) => ListItem(item, index)}
          />

          <View style={styles.typeLine}>
            <Text style={styles.textInformationTab}>{`${t('Type')}`}</Text>
          </View>

          <FlatList
            data={types}
            renderItem={({item, index}) => TypeItem(item, index)}
          />

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
    marginHorizontal: 29,
  },
  informationContainer: {
    backgroundColor: '#fff',
    marginLeft: 29,
    marginRight: 20,
    marginTop: 5,
  },
  titleSt: {
    fontSize: 28,
    color: Colors.title,
    fontFamily: 'poppins',
    fontWeight: '700',
  },
  subTitle: {
    color: '#6D6D7A',
    lineHeight: 18.5,
    fontFamily: 'roboto',
    marginTop: 10,
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
  typeLine: {
    height: 34,
    backgroundColor: '#F5F7F9',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 29,
    paddingRight: 13,
    marginTop: 22,
  },

  roomDetails: {
    height: 34,
    backgroundColor: '#F5F7F9',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 29,
    paddingRight: 13,
    marginTop: 32,
    marginBottom: 17,
  },

  informationTab: {
    height: 34,
    backgroundColor: '#F5F7F9',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 29,
    paddingRight: 13,
    marginTop: 7,
    marginBottom: 15,
  },

  textInformationTab: {
    color: '#BAB9BF',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'poppins',
  },

  addText: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.primary,
    fontFamily: 'roboto',
    fontWeight: '500',
  },
  underLine: {
    borderBottomColor: '#6D6D7A',
    opacity: 0.1,
    borderBottomWidth: 1,
    marginLeft: 29,
  },
  textLineStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
  },

  informationTitle: {
    marginBottom: 5,
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 33,
  },

  informationSubTitle: {
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 33,
  },

  firstSectionContainer: {
    paddingHorizontal: 31,
    marginBottom: 7,
  },

  buttonStyle: {
    fontFamily: 'roboto',
    borderRadius: 10,
    marginTop: 20,
    height: 50,
  },
  horizontalSloder: {
    marginLeft: 29,
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
});
