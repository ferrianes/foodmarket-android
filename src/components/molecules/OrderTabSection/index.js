import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';

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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={tabItemStyles.container}>
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        type="in-progress"
        style={tabItemStyles.itemList}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        type="in-progress"
        style={tabItemStyles.itemList}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        type="in-progress"
        style={tabItemStyles.itemList}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        type="in-progress"
        style={tabItemStyles.itemList}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={tabItemStyles.container}>
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        date="Jun 12, 14:00"
        type="past-orders"
        style={tabItemStyles.itemList}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        date="Jun 12, 14:00"
        status="Cancel"
        type="past-orders"
        style={tabItemStyles.itemList}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        date="Jun 12, 14:00"
        type="past-orders"
        style={tabItemStyles.itemList}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        item={14}
        date="Jun 12, 14:00"
        status="Cancel"
        type="past-orders"
        style={tabItemStyles.itemList}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

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
