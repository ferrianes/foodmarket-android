import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <IcStarOn height={20} width={20} />
        <IcStarOn height={20} width={20} />
        <IcStarOn height={20} width={20} />
        <IcStarOn height={20} width={20} />
        <IcStarOff height={20} width={20} />
      </View>
      <Text style={styles.ratingText}>4.5</Text>
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
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
  },
});
