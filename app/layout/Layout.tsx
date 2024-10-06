import React, { useEffect, useState } from "react";
import Header from "./Header";

import Footer from "./Footer";
import DomNavigation from "../navigation/DomNavigation"
import styled from "styled-components/native";
import { Theme } from "../types/type"
import { Dimensions, Platform, View } from "react-native";
import Constants from 'expo-constants';
import Left from "./Left";

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

function Layout(){

    
    return(
        <Container>
            <Header />
            <Content>
                <DomNavigation />
            </Content>
        </Container>
    )
}

export default Layout;

const Container = styled.View`
    width: ${`${Math.ceil(chartWidth)}px`};
    height: ${`${Math.ceil(chartHeight)}px`};
    gap: 10px;
    background-color: #fff;;
    display: flex;
    align-items: center;
    padding-top: ${Platform.OS === 'web' ? '0px' : `${Constants.statusBarHeight}px`}; 
    flex: 1;
`

const Content = styled.View`
    width: 100%;
    flex: 1;
`




