import React from "react";
import { useAppDispatch } from "../redux/store";
import pageSlice from "../redux/slices/page";
import {LeftContainer} from "../styles/style";
import { SIDBARMENU } from "../constants/constants";
import styled from "styled-components/native";
import { Theme } from "../types/type";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";
import { Platform, ScrollView, View } from "react-native";
import { NextIcon } from "../icons/sidebar/NextIcon";



function Left(){
    const dispatch = useAppDispatch();
    const getPage = useSelector((state:RootState) => state.page);

    return(
        <LeftContainer >
            <ScrollView  horizontal={true}>
            { SIDBARMENU.map(( data, idx ) => (
                        <TouchView 
                            key={idx}
                            onPress={() =>               
                                dispatch(
                                    pageSlice.actions.setCurrentPage({
                                    "path": data.path
                                })
                            )}
                        >
                            <Btn>
                                {data.icon}
                                <MenuText hovered={getPage.page.current.path === data.path}>{data.name}</MenuText>
                            </Btn>
                        </TouchView>

            ))}
            </ScrollView>
            <NextIcon />
        </LeftContainer>
    )
}

export default Left;

//hovered={getPage.page.current.path === data.path}
const Btn = styled.View<Theme>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
    transition: all .4s;
    display: flex;
    padding-top: ${Platform.OS === 'ios' ? "5px" : "0"};
    justify-content:  ${Platform.OS === 'ios' ? "flex-start" : "center"};
    align-items: center;
    gap: 6px;
`
const TouchView = styled.TouchableOpacity`
    width: 68px;
    height: 100%;
`

const MenuText = styled.Text<Theme>`
    color: ${(props) => !props.hovered ? props.theme.color.textGray : props.theme.color.white};
    font-size: ${Platform.OS === 'ios' ? "8px" : "10px"};
`

