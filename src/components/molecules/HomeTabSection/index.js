import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../../redux/action';
import ItemListFood from '../ItemListFood';
import ItemListFoodLoading from '../ItemListFoodLoading';

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
  const dispatch = useDispatch();
  const {foodNewTaste, isItemListFoodNewTasteLoading} = useSelector(
    (state) => state.homeReducer,
  );

  useEffect(() => {
    dispatch(getFoodData('new_food'));
  }, [dispatch]);

  return (
    <View style={tabItemStyles.container}>
      {isItemListFoodNewTasteLoading ? (
        <ItemListFoodLoading style={tabItemStyles.itemList} total={3} />
      ) : (
        foodNewTaste.map((foodNewTasteItem) => (
          <ItemListFood
            key={foodNewTasteItem.id}
            title={foodNewTasteItem.name}
            price={foodNewTasteItem.price}
            rating={foodNewTasteItem.rate}
            style={tabItemStyles.itemList}
            image={{uri: foodNewTasteItem.picture_path}}
            onPress={() => navigation.navigate('FoodDetail', foodNewTasteItem)}
          />
        ))
      )}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {foodPopular, isItemListFoodPopularLoading} = useSelector(
    (state) => state.homeReducer,
  );

  useEffect(() => {
    dispatch(getFoodData('popular'));
  }, [dispatch]);

  return (
    <View style={tabItemStyles.container}>
      {isItemListFoodPopularLoading ? (
        <ItemListFoodLoading style={tabItemStyles.itemList} total={3} />
      ) : (
        foodPopular.map((foodPopularItem) => (
          <ItemListFood
            key={foodPopularItem.id}
            title={foodPopularItem.name}
            price={foodPopularItem.price}
            rating={foodPopularItem.rate}
            style={tabItemStyles.itemList}
            image={{uri: foodPopularItem.picture_path}}
            onPress={() => navigation.navigate('FoodDetail', foodPopularItem)}
          />
        ))
      )}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {foodRecommended, isItemListFoodRecommendedLoading} = useSelector(
    (state) => state.homeReducer,
  );

  useEffect(() => {
    dispatch(getFoodData('recommended'));
  }, [dispatch]);

  return (
    <View style={tabItemStyles.container}>
      {isItemListFoodRecommendedLoading ? (
        <ItemListFoodLoading style={tabItemStyles.itemList} total={3} />
      ) : (
        foodRecommended.map((foodRecommendedItem) => (
          <ItemListFood
            key={foodRecommendedItem.id}
            title={foodRecommendedItem.name}
            price={foodRecommendedItem.price}
            rating={foodRecommendedItem.rate}
            style={tabItemStyles.itemList}
            image={{uri: foodRecommendedItem.picture_path}}
            onPress={() =>
              navigation.navigate('FoodDetail', foodRecommendedItem)
            }
          />
        ))
      )}
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
