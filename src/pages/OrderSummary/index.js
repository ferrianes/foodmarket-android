import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {apiUrl} from '../../config';
import {getData} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const [elevation, setElevation] = useState(0);
  const [borderTopWidth, setBorderTopWidth] = useState(0);
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const {item, transaction, userProfile} = route.params;

  useEffect(() => {
    getData('token').then((res) => setToken(res.value));
  }, []);

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    axios
      .post(apiUrl('checkout'), data, {headers: {Authorization: token}})
      .then((res) => {
        console.log('checkout success', res.data);
        setPaymentUrl(res.data.data.payment_url);
        setIsPaymentOpen(true);
      })
      .catch((err) => console.log('checkout error', err.response));

    // navigation.replace('SuccessOrder');
  };

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y === 0) {
      setElevation(0);
      setBorderTopWidth(0);
    } else {
      setElevation(4);
      setBorderTopWidth(1);
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentUrl}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </>
    );
  } else {
    return (
      <View style={styles.page}>
        <Header
          title="Order Summary"
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
              title={item.name}
              price={item.price}
              type="order-summary"
              item={transaction.totalItem}
              image={{uri: item.picture_path}}
            />
            <Text style={{...styles.label, ...{marginTop: 8}}}>
              Details Transaction
            </Text>
            <ItemValue
              label="Cherry Healthy"
              value={transaction.totalPrice}
              currency
            />
            <ItemValue label="Driver" value={transaction.driver} currency />
            <ItemValue label="Tax 10%" value={transaction.tax} currency />
            <ItemValue
              label="Total Price"
              value={transaction.total}
              valueColor="#1ABC9C"
              currency
            />
          </View>
          <View style={styles.contentDeliver}>
            <Text style={styles.label}>Deliver to : </Text>
            <ItemValue label="Name" value={userProfile.name} />
            <ItemValue label="Phone No." value={userProfile.phone_number} />
            <ItemValue label="Address" value={userProfile.address} />
            <ItemValue label="House No." value={userProfile.house_number} />
            <ItemValue label="City" value={userProfile.city} />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer(borderTopWidth)}>
          <Button
            native
            title="Checkout Now"
            style={styles.button}
            onPress={onCheckout}
          />
        </View>
      </View>
    );
  }
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
