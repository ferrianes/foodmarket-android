import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, style, name, rating, onPress}) => {
  return (
    <TouchableNativeFeedback useForeground={true} onPress={onPress}>
      <View style={{...styles.container, ...style}}>
        <Image style={styles.image} source={image} />
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Rating rating={rating} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 12,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
