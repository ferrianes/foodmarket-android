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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={tabItemStyles.container}>
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={tabItemStyles.container}>
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={tabItemStyles.container}>
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        title="Soup Bumil"
        price="200.000"
        rating={4}
        style={tabItemStyles.itemList}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <View style={styles.page}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
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
