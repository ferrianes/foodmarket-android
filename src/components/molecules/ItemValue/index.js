import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextNumber} from '../../atoms';

const ItemValue = ({label, value, valueColor = '#020202', currency}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {currency ? (
        <TextNumber style={styles.value(valueColor)} value={value} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
    marginBottom: 6,
  },
  value: (color) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color,
  }),
});
