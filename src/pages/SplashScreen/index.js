import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 500);
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#FFB000" barStyle="dark-content" />
      <Logo style={styles.logo} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {marginBottom: 38},
  text: {fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'},
});

export default SplashScreen;
