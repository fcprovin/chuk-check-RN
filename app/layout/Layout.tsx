import React, { useEffect, useState } from "react";
import Header from "./Header";

import Footer from "./Footer";
import DomNavigation from "../navigation/DomNavigation"
import styled from "styled-components/native";
import { Theme } from "../types/type"
import { Platform, View } from "react-native";
import Constants from 'expo-constants';
import Left from "./Left";


function Layout(){

    
    return(
        <Container>
            <Header />
            <DomNavigation />
        </Container>
    )
}

export default Layout;

const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-top: ${Platform.OS === 'web' ? '0px' : `${Constants.statusBarHeight}px`};
    flex: 1;
`



