import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text, Layout, Icon, Divider, Spinner} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
/* import {REACT_APP_MEDIA_URL} from '@env'; */

import Colors from '../../styles/Colors';

import {useQuery} from '@apollo/client';
import {GET_MY_USER} from '../../graphql/queries';
import {useAuth} from '../../providers/AuthProvider';

import SvgIconBell from '../../assets/icons/svg-icons/Bell';
import SvgIconCard from '../../assets/icons/svg-icons/CreditCard';
import SvgIconShield from '../../assets/icons/svg-icons/SecurityShield';
import SvgIconLeftArrow from '../../assets/icons/svg-icons/LeftCircleArrow';

export default function ProfileScreen({navigation}: any) {
  const {handleLogout} = useAuth();
  const {loading, data, refetch} = useQuery(GET_MY_USER);

  const {t} = useTranslation();

  const onGoBack = () => {
    refetch();
  };

  if (loading) {
    return (
      <Layout style={[styles.container, styles.center]}>
        <Spinner />
      </Layout>
    );
  }
  t;
  return (
    <Layout style={styles.container}>
      <Layout style={styles.header}>
        <Layout style={styles.leftText}>
          <Text style={styles.h1}>Hi, {data.getMyUser.firstName}</Text>
          <Text>{data.getMyUser.phoneNumber}</Text>
        </Layout>
        <TouchableOpacity
          onPress={() => {
            navigation.push('ChangeProfile', {
              firstName: data.getMyUser.firstName,
              lastName: data.getMyUser.lastName,
              phoneNumber: data.getMyUser.phoneNumber,
              avatar: data.getMyUser.avatar,
              onGoBack,
            });
          }}>
          <Image
            source={
              data.getMyUser.avatar
                ? {
                    uri: `${REACT_APP_MEDIA_URL}/${data.getMyUser.avatar.file.key}`,
                  }
                : require('../../assets/icons/images/avtar.png')
            }
            style={styles.avatar}
          />
        </TouchableOpacity>
      </Layout>

      <Layout style={styles.height35} />

      <TouchableOpacity onPress={() => navigation.push('NotificationSettings')}>
        <Layout style={styles.listItem}>
          <SvgIconBell style={styles.imageIcon} />
          <Text style={styles.listText}>{`${t('Notifications')}`}</Text>
          <Layout style={styles.flex} />
          <Icon style={styles.icon} fill="#000" name="chevron-right" />
        </Layout>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={() => {}}>
        <Layout style={styles.listItem}>
          <SvgIconCard style={styles.imageIcon} />
          <Text style={styles.listText}>{`${t(
            'Payment/Billing settings',
          )}`}</Text>
          <Layout style={styles.flex} />
          <Icon style={styles.icon} fill="#000" name="chevron-right" />
        </Layout>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={() => {}}>
        <Layout style={styles.listItem}>
          <SvgIconShield style={styles.imageIcon} />
          <Text style={styles.listText}>{`${t('Security')}`}</Text>
          <Layout style={styles.flex} />
          <Icon style={styles.icon} fill="#000" name="chevron-right" />
        </Layout>
      </TouchableOpacity>

      <Layout style={styles.flex} />
      <TouchableOpacity
        onPress={() => {
          handleLogout();
        }}>
        <Layout style={[styles.listItem, styles.marginBottom32]}>
          <SvgIconLeftArrow style={styles.imageIcon} />
          <Text style={styles.listText}>{`${t('Logout')}`}</Text>
          <Layout style={styles.flex} />
          <Icon style={styles.icon} fill="#000" name="chevron-right" />
        </Layout>
      </TouchableOpacity>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 21,
    paddingRight: 23,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftText: {
    justifyContent: 'center',
  },
  h1: {
    color: Colors.title,
    fontFamily: 'poppins',
    fontWeight: '700',
    fontSize: 28,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  listItem: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: 16,
    color: Colors.title,
    fontFamily: 'poppins',
    lineHeight: 25,
    fontWeight: '500',
  },
  imageIcon: {
    marginRight: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  height35: {
    height: 35,
  },
  flex: {
    flex: 1,
  },
  marginBottom32: {
    marginBottom: 32,
  },
});
