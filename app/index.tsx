import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Test1 from "./pages/test/Test1";
import Test2 from "./pages/test/Test2";
import { Router, Routes, Route } from "./routing";
import { Platform, Text, View } from 'react-native';
import { useAppDispatch } from "./redux/store"
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/reducers";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./pages/splash/Splash";
import Login from "./pages/login/Login";
import { getUserFromStorage, removeUserFromStorage } from "./api/localSave";
import userSlice from "./redux/slices/user";
import Home from "./pages/home/home";


const Stack = createNativeStackNavigator();
function RoseRoute(){
    const dispatch = useAppDispatch();


    const getUserData = async () => {
        const user = await getUserFromStorage("googleUser");
        dispatch(userSlice.actions.setGoogleUser(user));
    }

    useEffect(() => {
        getUserData();
    }, []);

  return(
    <NavigationContainer  independent={true}>
      <Stack.Navigator initialRouteName='splash'  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash}/>
        <Stack.Screen name="layout" component={Layout}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default RoseRoute;