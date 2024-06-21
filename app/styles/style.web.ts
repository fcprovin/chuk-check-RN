import styled from "styled-components/native";
import { Theme } from "./type";

export const LeftContainer = styled.View<Theme>`
    padding-top: 40px;
    width: 260px;
    height: 100%;
    background-color: ${(props:Theme) => props.theme.color.black};
    gap: 5px;
`

