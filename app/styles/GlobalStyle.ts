import styled from "styled-components/native";
import { Theme } from "../types/type";
import { Platform } from "react-native";

// 공통 스타일 
// 여러 페이지에서 사용하는 스타일만

export const MainConLayOut = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const CustomText = styled.Text<Theme>`
    color: ${(props) => props.customColor};
    font-size: ${(props) => props.customFontSize};
    font-weight: ${(props) => props.customBold};
`

export const Btn = styled.TouchableOpacity<Theme>`
    width: ${(props) => props.customWidth};
    height: ${(props) => props.customHeight};
    background-color: ${(props) => props.custombackGround};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.customColor};
`