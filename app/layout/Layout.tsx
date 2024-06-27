import React, { useEffect, useState } from "react";
import Header from "./Header";

import Footer from "./Footer";
import DomNavigation from "../navigation/DomNavigation"
import styled from "styled-components/native";
import { Theme } from "../types/type"
import { useCurrentWidth } from "../hooks/useCurrentWidth"
import { Platform } from "react-native";
import Constants from 'expo-constants';
import Left from "./Left";


function Layout(){
    const { contentWidth } = useCurrentWidth();

    
    return(
        <LayOut>
            <ContentView>
                {/* web, electron 일 경우 메뉴바 */}
                {Platform.OS === 'web' ? <Left /> : null}

                <MainView width={contentWidth}>
                    <Header />
                    <DomNavigation />
                </MainView>
            </ContentView>

            <Footer />
            {/* 모바일일 경우 메뉴바 */}
            {Platform.OS !== 'web' ? <Left /> : null}
        </LayOut>
    )
}

export default Layout;



const LayOut = styled.View<Theme>`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${(props) => props.theme.color.baseBackGround};
    padding-top: ${Platform.OS === 'ios' ? '0px' : `${Constants.statusBarHeight}px`};
    flex: 1;
`

const ContentView = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

const MainView = styled.View<{width:number}>`
    width: ${(props) => `${props.width}px`};
    height: 100%;
    display: flex;
    
`