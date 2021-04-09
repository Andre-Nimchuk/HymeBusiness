import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
} from 'react-native';
import {Text, Layout, Input} from '@ui-kitten/components';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/client';

import FlatButton from '../../../components/FlatButton';
/* import ImagePickerModal from '../../../components/ImagePickerModal'; */
import BackArrowHeader from '../../../components/BackArrowHeader';

import {UPDATE_MY_PROFILE, GET_UPLOAD_URL} from '../../../graphql/mutations';

import Colors from '../../../styles/Colors';

import SvgIconDefaultImage from '../../../assets/icons/svg-icons/DefaultImage';
import SvgIconAddPhoto from '../../../assets/icons/svg-icons/AddPhoto';
/* import {REACT_APP_MEDIA_URL} from '@env'; */

const getBlob = async (fileUri: string) => {
  const resp = await fetch(fileUri);
  const imageBody = await resp.blob();
  return imageBody;
};

export default function ChangeProfileScreen({route, navigation}: any) {
  const {onGoBack} = route.params;

  const [firstName, setFirstName] = useState(route.params.firstName);
  const [lastName, setLastName] = useState(route.params.lastName);
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [avatar, setAvatar] = useState(route.params.avatar);
  const [cameraPicker, setCameraPicker] = useState(false);

  const {t} = useTranslation();

  const [getUploadUrl] = useMutation(GET_UPLOAD_URL);

  const [updateMyProfile] = useMutation(UPDATE_MY_PROFILE, {
    onCompleted: () => {
      console.log('Updating of profile finished');
      onGoBack();
      navigation.goBack();
    },
    onError: err => {
      console.error(err);
    },
  });

  const updateProfile = (someData: any) => {
    return updateMyProfile({
      variables: {
        input: someData,
      },
    });
  };

  const uploadAvatar = (data: any) => {
    let uploadUrl: string;
    let key: string;
    getUploadUrl({
      variables: {
        input: {
          filename: data.name,
          filetype: data.type,
          album: 'profilePicture',
        },
      },
    })
      .then(res => {
        console.log(res, 'res');
        uploadUrl = res.data.getUploadUrl.signedUrl;
        return getBlob(data.uri);
      })
      .then(file => {
        console.log(file, 'file');
        return fetch(uploadUrl, {
          method: 'PUT',
          mode: 'cors',
          body: file,
        });
      })
      .then((res: any) => {
        console.log(res, 'res');
        return updateMyProfile({
          variables: {
            input: {
              firstName,
              avatar: {
                id: 'idddddd',
                file: {
                  bucket: 'hyme-media-dev',
                  region: 'eu-west-1',
                  key: key,
                },
              },
            },
          },
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <Layout style={styles.container}>
      <BackArrowHeader navigation={navigation} title={t('Personal info')} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
        style={styles.flex}>
        <ScrollView>
          <Layout style={[styles.marginHorizontal, styles.flex]}>
            <Layout style={styles.avatarContainer}>
              <TouchableOpacity onPress={() => setCameraPicker(true)}>
                {avatar ? (
                  <Image
                    source={{
                      uri: `${REACT_APP_MEDIA_URL}/${avatar.file.key}`,
                    }}
                    style={styles.image}
                  />
                ) : (
                  <Layout style={styles.roundedImage}>
                    <SvgIconDefaultImage />
                  </Layout>
                )}
                <SvgIconAddPhoto style={styles.addImage} />
              </TouchableOpacity>
            </Layout>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text style={styles.labelTextStyle}>{`${t('First Name')}`}</Text>
              <Input
                style={styles.input}
                textStyle={styles.inputText}
                keyboardType="default"
                autoCapitalize="words"
                value={firstName}
                onChangeText={value => {
                  setFirstName(value);
                }}
              />
              <Text style={styles.labelTextStyle}>{`${t('Last Name')}`}</Text>
              <Input
                style={styles.input}
                textStyle={styles.inputText}
                keyboardType="default"
                autoCapitalize="words"
                value={lastName}
                onChangeText={value => {
                  setLastName(value);
                }}
              />

              <Text style={styles.labelTextStyle}>{`${t(
                'Phone Number',
              )}`}</Text>
              <Input
                style={styles.input}
                textStyle={styles.inputText}
                keyboardType="phone-pad"
                autoCapitalize="words"
                value={phoneNumber}
                onChangeText={value => {
                  setPhoneNumber(value);
                }}
              />
              {/* 
              <ImagePickerModal
                visible={cameraPicker}
                setVisible={setCameraPicker}
                onResult={res => uploadAvatar(res)}
              /> */}
            </TouchableWithoutFeedback>

            <Layout style={styles.flex} />
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
      <FlatButton
        title="Save details"
        onPress={() => {
          updateProfile();
        }}
        style={styles.saveBtn}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    height: 120,
    alignItems: 'center',
  },
  image: {
    height: 111,
    width: 111,
    borderRadius: 55.5,
  },
  roundedImage: {
    height: 111,
    width: 111,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 55.5,
    borderColor: Colors.gray,
    borderStyle: 'dashed',
  },
  addImage: {
    top: -35,
    left: 80,
  },
  marginHorizontal: {
    marginHorizontal: 35,
  },
  labelTextStyle: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: '#6D6D7A',
    fontFamily: 'roboto',
  },
  input: {
    borderColor: 'rgba(28,26,47, 0.1)',
  },
  inputText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.title,
  },
  flex: {
    flex: 1,
  },
  saveBtn: {
    marginBottom: 35,
    marginHorizontal: 35,
  },
});
