import Constants from 'expo-constants';

export const GOOGLE_CONFIG = {
    CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID,
    ANDROID_CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ANDROID
};
