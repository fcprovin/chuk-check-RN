import styled from "styled-components/native";
import { Theme } from "../types/type";
import { Platform } from "react-native";


export const MainConLayOut = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const CustomText = styled.Text<Theme>`
    color: ${(props) => props.customColor};
    font-size: ${(props) => props.customSize};
    font-weight: ${(props) => props.customBold};
`

export const Btn = styled.TouchableOpacity<Theme>`
    width: 178px;
    height: 40px;
    background-color: ${(props) => props.custombackGround};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.customColor};
`