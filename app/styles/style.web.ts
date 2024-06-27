import styled from "styled-components/native";
import { Theme } from "../types/type";

export const LeftContainer = styled.View<Theme>`
    padding-top: 40px;
    width: ${(props) => props.hideWidth ? "80px" : "260px"};
    height: 100%;
    background-color: ${(props:Theme) => props.theme.color.black};
    gap: 8px;
    display: flex;
    align-items: ${(props) => props.hideWidth ? "center" : ""};
    gap: 5px;
    transition: all .4s;
`

export const ModalContent = styled.View<Theme>`
    background-color: ${(props) => props.theme.color.black};
    width: 500px;
    height: 600px;
    position: relative;
    display: flex;
    align-items: flex-end;
    border-radius: 15px;
`