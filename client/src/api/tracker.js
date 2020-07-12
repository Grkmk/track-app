import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

export const authInstance = axios.create({
  baseURL: Constants.manifest.extra.forwardURL
});

authInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const instance = axios.create({
  baseURL: Constants.manifest.extra.forwardURL
});
