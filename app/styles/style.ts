import styled from "styled-components/native";
import { Theme } from "../types/type";

export const LeftContainer = styled.View<Theme>`
    width: 100%;
    height: 63px;
    background-color: ${(props) => props.theme.color.black};
    gap: 10px;
    margin-top: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.View<Theme>`
    background-color: ${(props) => props.theme.color.black};
    width: 100%;
    height: 130%;
    position: absolute;
    display: flex;
    align-items: flex-end;
    top: 0;
    left: 0;
`