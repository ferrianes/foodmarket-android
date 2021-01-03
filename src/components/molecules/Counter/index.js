import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IcMin, IcPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    } else if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }

    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback
          onPress={() => onCount('minus')}
          background={TouchableNativeFeedback.Ripple('#020202')}>
          <IcMin />
        </TouchableNativeFeedback>
      </View>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback
          onPress={() => onCount('plus')}
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
