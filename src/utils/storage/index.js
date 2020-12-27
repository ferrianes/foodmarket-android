import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from '../Toast';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    Toast(`Food Market can't access localstorage \n Error: ${e}`, 'danger');
  }
};

export const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Toast(`Food Market can't access localstorage \n Error: ${e}`, 'danger');
  }
};
