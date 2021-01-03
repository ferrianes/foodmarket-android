import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {TextNumber} from '../../atoms';
import Rating from '../Rating';

const ItemListFood = ({
  style,
  onPress,
  image,
  title,
  price,
  rating,
  type,
  item,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <TextNumber value={price} style={styles.item} />
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <TextNumber value={price} style={styles.item} />
            </View>
            <Text style={styles.item}>{item} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.item}>
                {item} items • <TextNumber value={price} />
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.item}>
                {item} items • <TextNumber value={price} />
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <TextNumber value={price} style={styles.item} />
            </View>
            <Rating rating={rating} />
          </>
        );
    }
  };

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{...styles.container, ...style}}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableNativeFeedback>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {width: 60, height: 60, borderRadius: 8, marginRight: 12},
  textContainer: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  item: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },
});
