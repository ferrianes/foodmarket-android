import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              <FoodCard style={styles.card} image={FoodDummy1} />
              <FoodCard style={styles.card} image={FoodDummy2} />
              <FoodCard style={styles.card} image={FoodDummy3} />
              <FoodCard style={styles.card} image={FoodDummy4} />
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
