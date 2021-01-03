import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import {TextNumber} from '../../atoms';

const Rating = ({rating}) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        {[...Array(5)].map((value, index) => {
          if (index < Math.floor(rating)) {
            return <IcStarOn key={index} />;
          } else {
            return <IcStarOff key={index} />;
          }
        })}
      </View>
      <TextNumber value={rating} type="decimal" style={styles.ratingText} />
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
