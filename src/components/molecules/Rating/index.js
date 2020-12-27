import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import {toFixedNumberFormatter} from '../../../utils';

const Rating = ({rating}) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<IcStarOn key={i} />);
      } else {
        stars.push(<IcStarOff key={i} />);
      }
    }

    return stars;
  };

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStars()}</View>
      <Text style={styles.ratingText}>{toFixedNumberFormatter(rating)}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    paddingTop: 2,
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
    paddingTop: 2,
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
  },
});
