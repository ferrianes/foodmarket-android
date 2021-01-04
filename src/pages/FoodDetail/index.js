import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Rating, TextNumber} from '../../components';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {
    id,
    name,
    picture_path,
    description,
    rate,
    ingredients,
    price,
  } = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => setUserProfile(res));
  }, []);

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;
    const data = {
      item: {
        id,
        name,
        picture_path,
        price,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        <ImageBackground source={{uri: picture_path}} style={styles.cover}>
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
              <Text style={styles.title}>{name}</Text>
              <Rating rating={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients : </Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContent}>
        <View style={styles.priceContainer}>
          <Text style={styles.labelTotal}>Total Price</Text>
          <TextNumber value={totalItem * price} style={styles.priceTotal} />
        </View>
        <View style={styles.buttonPriceContainer}>
          <Button native title="Order Now" onPress={onOrder} />
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
