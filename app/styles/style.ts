import styled from "styled-components/native";
import { Theme } from "./type";

export const LeftContainer = styled.View<Theme>`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.color.black};
    gap: 10px;
    margin-top: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
`