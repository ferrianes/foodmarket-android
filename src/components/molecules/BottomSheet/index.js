import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Animated,
  BackHandler,
  TouchableWithoutFeedback,
  View,
  Text,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcClose} from '../../../assets';

const BottomSheet = ({children}) => {
  const translateY = React.useRef(new Animated.Value(500)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  const closeBottomSheet = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.spring(translateY, {
      toValue: 500,
      bounciness: 0,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      dispatch({type: 'SET_BOTTOM_SHEET', value: false});
    }, 200);
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        closeBottomSheet();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  React.useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      bounciness: 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [translateY, opacity]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => closeBottomSheet()}>
        <Animated.View style={styles.overlay(opacity)} />
      </TouchableWithoutFeedback>
      <Animated.View style={styles.bottomSheet(translateY)}>
        <View style={styles.contentContainer}>
          <View style={styles.close}>
            <Text style={styles.textTitle}>Choose an action</Text>
            <Pressable onPress={() => closeBottomSheet()}>
              <IcClose height={30} width={30} />
            </Pressable>
          </View>
          {children}
        </View>
      </Animated.View>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  overlay: (opacity) => ({
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    opacity,
  }),
  bottomSheet: (translateY) => ({
    height: 230,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    transform: [
      {
        translateY,
      },
    ],
  }),
  contentContainer: {
    height: '100%',
  },
  close: {
    height: '33.333%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    includeFontPadding: false,
    color: '#020202',
  },
});
