import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItemListMenu from '../ItemListMenu';
import {apiUrl, getData, Toast} from '../../../utils';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../../redux/action/global';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={tabBarStyles.indicatorStyle}
    pressColor="silver"
    style={tabBarStyles.container}
    tabStyle={tabBarStyles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={tabBarStyles.textStyle(focused)}>{route.title}</Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signOut = () => {
    getData('token').then((res) => {
      dispatch(setLoading(true));
      console.log(res);
      axios
        .post(`${apiUrl}/logout`, {}, {headers: {Authorization: res.value}})
        .then((resSignOut) => {
          console.log(resSignOut);
          AsyncStorage.multiRemove(['userProfile', 'token']).then(
            (resAstorage) => {
              console.log(resAstorage);
              dispatch(setLoading(false));
              Toast('Your account successfully signed out', 'success');
              navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
            },
          );
        })
        .catch((e) => {
          dispatch(setLoading(false));
          Toast('Oopss... Something went wrong', 'danger');
        });
    });
  };

  return (
    <View style={tabItemStyles.container}>
      <ItemListMenu style={tabItemStyles.itemList} text="Edit Profile" />
      <ItemListMenu style={tabItemStyles.itemList} text="Home Address" />
      <ItemListMenu style={tabItemStyles.itemList} text="Security" />
      <ItemListMenu style={tabItemStyles.itemList} text="Payment" />
      <ItemListMenu
        style={tabItemStyles.itemList}
        text="Sign Out"
        onPress={signOut}
      />
    </View>
  );
};

const FoodMarket = () => {
  // const navigation = useNavigation();
  return (
    <View style={tabItemStyles.container}>
      <ItemListMenu style={tabItemStyles.itemList} text="Rate App" />
      <ItemListMenu style={tabItemStyles.itemList} text="Help Center" />
      <ItemListMenu style={tabItemStyles.itemList} text="Privacy & Policy" />
      <ItemListMenu style={tabItemStyles.itemList} text="Terms & Conditions" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Food Market'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  return (
    <View style={styles.page}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </View>
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  page: {flex: 1},
});

const tabBarStyles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: '#020202',
    height: 3,
    borderRadius: 6,
  },
  container: {backgroundColor: '#fff'},
  tabStyle: {width: 'auto', paddingHorizontal: 12},
  textStyle: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
});

const tabItemStyles = StyleSheet.create({
  container: {paddingTop: 8},
  itemList: {paddingHorizontal: 24},
});
