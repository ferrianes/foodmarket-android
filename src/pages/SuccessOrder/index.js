import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets/Illustration';
import {Button} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Text style={styles.title}>You've Made Order</Text>
      <Text style={styles.subTitle}>
        Just stay at Home while we are preparing your best foods
      </Text>
      <Button
        block
        native
        title="Order Other Foods"
        onPress={() => navigation.replace('MainApp')}
        style={styles.buttonOrder}
      />
      <Button
        block
        native
        variant="secondary"
        title="View My Order"
        onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
      />
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginTop: 30,
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonOrder: {
    marginBottom: 12,
  },
});
