import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack, style}) => {
  return (
    <View style={{...styles.container(onBack ? 10 : 0), ...style}}>
      {onBack && (
        <View style={styles.backWrapper}>
          <TouchableNativeFeedback onPress={onBack}>
            <View style={styles.back}>
              <IcBack />
            </View>
          </TouchableNativeFeedback>
        </View>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (onBack) => ({
    backgroundColor: '#fff',
    paddingHorizontal: 24 - onBack,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  backWrapper: {
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 16,
  },
  back: {
    padding: 16,
    borderRadius: 8,
  },
});
