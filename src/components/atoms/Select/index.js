import {Picker} from '@react-native-community/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Select = ({style, label, value, onSelectChange}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(ItemValue) => onSelectChange(ItemValue)}>
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Malang" value="Malang" />
          <Picker.Item label="Solo" value="Solo" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
