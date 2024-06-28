import styled from "styled-components/native";
import { Theme } from "../types/type";
import { Platform } from "react-native";
import Constants from 'expo-constants';

export const LeftContainer = styled.View<Theme>`
    width: 100%;
    height: ${Platform.OS === 'ios' ? "85px" : "63px"};
    background-color: ${(props) => props.theme.color.black};
    gap: 10px;
    margin-top: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items:  ${Platform.OS === 'ios' ? "flex-start" : "center"};
    justify-content: center;
`

export const ModalContent = styled.View<Theme>`
    background-color: ${(props) => props.theme.color.baseBackGround};
    width: 100%;
    height: 130%;
    position: absolute;
    display: flex;
    align-items: flex-end;
    top: 0;
    left: 0;
    padding-top: ${Platform.OS === 'ios' ? `${Constants.statusBarHeight}px` : '0'};
`