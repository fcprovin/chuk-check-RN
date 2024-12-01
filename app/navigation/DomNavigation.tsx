
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store/reducers';
import Test1 from '../pages/test/Test1';
import Test2 from '../pages/test/Test2';
import Splash from '../pages/splash/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/home';




const Stack = createNativeStackNavigator();

const DomNavigation = () => {

    return(
        <NavigationContainer  independent={true}>
            <Stack.Navigator initialRouteName='Home'  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Test1" component={Test1}/>
            <Stack.Screen name="Test2" component={Test2}/>
            <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}


export default DomNavigation;