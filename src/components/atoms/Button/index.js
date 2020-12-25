import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = ({style, variant, title, onPress, block, native}) => {
  let backgroundColor, color, width, ripple;
  switch (variant) {
    case 'primary':
      backgroundColor = '#FFC700';
      color = '#020202';
      ripple = '#daa520';
      break;
    case 'secondary':
      backgroundColor = '#8D92A3';
      color = '#fff';
      ripple = '#696969';
      break;
    case 'danger':
      backgroundColor = '#D9435E';
      color = '#fff';
      ripple = '#DC2626';
      break;
    default:
      backgroundColor = '#FFC700';
      color = '#020202';
      ripple = '#daa520';
      break;
  }

  if (block) {
    width = '100%';
  }

  return (
    <View style={{...styles.wrapper(width), ...style}}>
      <Pressable
        onPress={onPress}
        style={styles.button(backgroundColor)}
        android_ripple={
          native && {
            color: ripple,
          }
        }>
        <Text style={styles.text(color)}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: (width) => ({
    borderRadius: 8,
    overflow: 'hidden',
    width,
  }),
  button: (backgroundColor) => ({
    backgroundColor,
    padding: 12,
    borderRadius: 8,
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color,
    textAlign: 'center',
  }),
});
