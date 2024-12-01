import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserToStorage = async (userData: any, key: string) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(userData));
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};

export const getUserFromStorage = async (key: string) => {
    try {
        const userData = await AsyncStorage.getItem(key);
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
};

export const removeUserFromStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing user data:', error);
    }
};

