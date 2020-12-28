import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const ItemListFoodLoading = ({style, total = 1}) => (
  <>
    {[...Array(total)].map((value, index) => (
      <View style={{...styles.page, ...style}} key={index}>
        <Placeholder Animation={Fade}>
          <View style={styles.container}>
            <PlaceholderMedia style={styles.image} />
            <View style={styles.textContainer}>
              <PlaceholderLine width={80} height={16} />
              <PlaceholderLine noMargin={true} width={60} height={13} />
            </View>
          </View>
        </Placeholder>
      </View>
    ))}
  </>
);

export default ItemListFoodLoading;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  container: {flexDirection: 'row'},
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
