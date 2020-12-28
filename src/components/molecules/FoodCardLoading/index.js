import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const FoodCardLoading = ({style, total = 1}) => (
  <>
    {[...Array(total)].map((value, index) => (
      <View style={{...styles.container, ...style}} key={index}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={styles.image} />
          <View style={styles.content}>
            <PlaceholderLine width={100} height={16} />
            <PlaceholderLine width={50} height={16} />
          </View>
        </Placeholder>
      </View>
    ))}
  </>
);

export default FoodCardLoading;

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
  image: {width: 200, height: 140},
  content: {padding: 12},
});
