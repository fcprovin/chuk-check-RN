import React from "react";
import styled from "styled-components/native";
import { Theme } from "../types/type"
import { Platform } from "react-native";





function Footer(){


    return(
        <ConTainer>
           
        </ConTainer>
    )
}

export default Footer;


const ConTainer = styled.View<Theme>`
    width: 100%;
    height: 90px;
    background-color: ${(props) => props.theme.color.footerBackGround};
    position: absolute;
    bottom: 0;
    border-top-width: 0.5px;
    border-top-color: ${(props) => props.theme.color.textGray};
    margin-bottom: ${Platform.OS !== 'web' ? Platform.OS  === 'ios' ? '85px' : "63px" : 0};
`