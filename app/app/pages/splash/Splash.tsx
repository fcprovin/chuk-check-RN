import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import pageSlice from "@/app/redux/slices/page";
import { Dimensions } from 'react-native';

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 

export default function Splash(){
    const dispatch = useDispatch();

    async function delay_splash() {
        await SplashScreen.preventAutoHideAsync();
        await sleep(3000);
        await SplashScreen.hideAsync();
        dispatch(pageSlice.actions.setCurrentPage({
            "path": "/test1"
        }))
    }

    useEffect(() => {
        delay_splash()
    },[])

    return (
      <Layout colors={['#FF00D2', '#FF2000']} >
        <Image source={require("../../../assets/icons/whiteLogo.png")}/>
      </Layout>
    );
}


const Layout = styled(LinearGradient)`
    width: 100%;
    height:105%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
`