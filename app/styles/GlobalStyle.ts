import styled from "styled-components/native";
import { Theme } from "../types/type";


export const MainConLayOut = styled.View`
    width: 100%;
    height: 100%;
`

export const ElectronHeaderBtn = styled.View<{size:string}>`
    width: size;
    height: size;
`

//로그인 화면 스타일

export const LoginLayout = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 10%;
    gap: 20px;
`
export const LoginTitle = styled.Text<Theme>`
    letter-spacing: 24px;
    font-size: ${(props) => props.theme.fontSize.title};
    color: ${(props) => props.theme.color.white};
    font-weight: 700;
`

export const LoginDesc = styled.Text<Theme>`
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.color.white};
`

export const LoginBtnBox = styled.TouchableOpacity<Theme>`
    width: ${(props) => props.inColor ? '90%' : '320px'};
    height: 43px;
    margin-top: 40px;
`

export const LoginBtn = styled.Text<Theme>`
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.Regular};
    border: 1px solid ${(props) => props.theme.color.primaryColor};
    border-radius: 20px;
    padding: 10px 0;
    color: ${(props) => props.inColor ? props.theme.color.white : props.theme.color.primaryColor};
    background-color:  ${(props) => props.inColor ? props.theme.color.primaryColor : "null"};
    cursor: pointer;
    text-align: center;
`