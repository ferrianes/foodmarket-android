import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profile = () => {
  const [photoProfile, setPhotoProfile] = useState(ProfileDummy);
  const [nameProfile, setNameProfile] = useState('');
  const [emailProfile, setEmailProfile] = useState('');

  useEffect(() => {
    getData('userProfile').then((res) => {
      setPhotoProfile({uri: res.profile_photo_url});
      setNameProfile(res.name);
      setEmailProfile(res.email);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.photoContainer}>
        <View style={styles.borderPhoto}>
          <Image source={photoProfile} style={styles.imageContainer} />
        </View>
      </View>
      <Text style={styles.name}>{nameProfile}</Text>
      <Text style={styles.email}>{emailProfile}</Text>
      <ProfileTabSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#fff'},
  photoContainer: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
    marginBottom: 26,
  },
});
