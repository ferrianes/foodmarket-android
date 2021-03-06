import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  FoodCard,
  FoodCardLoading,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);

  const {isFoodCardLoading} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <ScrollView>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              {isFoodCardLoading ? (
                <FoodCardLoading style={styles.card} total={3} />
              ) : (
                food.map((foodItem) => (
                  <FoodCard
                    key={foodItem.id}
                    style={styles.card}
                    image={{uri: foodItem.picture_path}}
                    name={foodItem.name}
                    rating={foodItem.rate}
                    onPress={() => navigation.navigate('FoodDetail', foodItem)}
                  />
                ))
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  foodContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    paddingHorizontal: 12,
  },
  card: {
    marginHorizontal: 12,
  },
  tabContainer: {
    flex: 1,
  },
});
