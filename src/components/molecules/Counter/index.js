import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IcMin, IcPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#020202')}>
          <IcMin />
        </TouchableNativeFeedback>
      </View>
      <Text style={styles.value}>14</Text>
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#020202')}>
          <IcPlus />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 26,
    height: 26,
    borderRadius: 8,
    overflow: 'hidden',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
