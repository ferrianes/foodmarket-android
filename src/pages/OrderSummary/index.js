import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';

const OrderSummary = ({navigation}) => {
  const [elevation, setElevation] = useState(0);
  const [borderTopWidth, setBorderTopWidth] = useState(0);

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y === 0) {
      setElevation(0);
      setBorderTopWidth(0);
    } else {
      setElevation(4);
      setBorderTopWidth(1);
    }
  };

  return (
    <View style={styles.page}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
        style={{elevation}}
      />
      <ScrollView style={styles.scroll} onScroll={handleScroll}>
        <View style={styles.contentOrder}>
          <Text style={{...styles.label, ...{marginBottom: 4}}}>
            Item Ordered
          </Text>
          <ItemListFood
            title="Soup Bumil"
            price="200.000"
            type="order-summary"
            item={14}
            image={FoodDummy1}
            items={14}
          />
          <Text style={{...styles.label, ...{marginTop: 8}}}>
            Details Transaction
          </Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.contentDeliver}>
          <Text style={styles.label}>Deliver to : </Text>
          <ItemValue label="Name" value="Angga Risky" />
          <ItemValue label="Phone No." value="0822 0819 9688" />
          <ItemValue label="Address" value="Cibubur" />
          <ItemValue label="House No." value="20A" />
          <ItemValue label="City" value="Jakarta" />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer(borderTopWidth)}>
        <Button
          native
          title="Checkout Now"
          style={styles.button}
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {backgroundColor: '#fff', flex: 1},
  scroll: {paddingHorizontal: 24},
  contentOrder: {
    marginVertical: 24,
    paddingVertical: 16,
  },
  contentDeliver: {
    paddingVertical: 16,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  buttonContainer: (borderTopWidth) => ({
    borderTopWidth,
    borderColor: '#E5E7EB',
  }),
  button: {
    margin: 24,
  },
});
