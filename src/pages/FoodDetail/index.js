import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {FoodDummy6, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <ImageBackground source={FoodDummy6} style={styles.cover}>
          <View style={styles.buttonContainer}>
            <TouchableNativeFeedback
              onPress={() => navigation.goBack()}
              style={styles.buttonBack}>
              <IcBackWhite />
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil
          </Text>
          <Text style={styles.label}>Ingredients : </Text>
          <Text style={styles.desc}>Seledri, Telur, Blueberry, Madu</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContent}>
        <View style={styles.priceContainer}>
          <Text style={styles.labelTotal}>Total Price</Text>
          <Text style={styles.priceTotal}>IDR 12.200.000</Text>
        </View>
        <View style={styles.buttonPriceContainer}>
          <Button
            native
            title="Order Now"
            onPress={() => navigation.navigate('OrderSummary')}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 12,
    paddingLeft: 8,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 25,
  },
  buttonBack: {
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 17,
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  footerContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  priceContainer: {
    width: '50%',
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  buttonPriceContainer: {
    width: '50%',
  },
});
