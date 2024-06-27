import React from "react";
import { Button, Text, View } from "react-native";
import { useAppDispatch } from "../redux/store";
import pageSlice from "../redux/slices/page";
import {LeftContainer} from "../styles/style";
import { SIDBARMENU } from "../constants/constants";
import styled from "styled-components/native";
import { Theme } from "../types/type";
import Hoverable from "react-native-hoverable";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";
import { Logo } from "../icons/Logo";
import SmallWhiteLogo from "../icons/SmallWhiteLogo";





function Left(){
    const dispatch = useAppDispatch();
    const getPage = useSelector((state:RootState) => state.page);
    const setting = useSelector((state:RootState) => state.setting);
   console.log(setting.hide)
    return(
        <LeftContainer hideWidth={ setting.hide }>
            {setting.hide ?  <SmallWhiteLogo /> : <Logo width={'125px'}/>}

            { SIDBARMENU.map(( data, idx ) => (
                /* Web hover event */
                <Hoverable
                    key={idx}
                    style={ ({hovered}) => [
                        {width: '100%'}
                    ]}
                >
                    {({hovered}) => (
                        <TouchView 
                            onPress={() =>               
                                dispatch(
                                    pageSlice.actions.setCurrentPage({
                                    "path": data.path
                                })
                            )}
                            activeOpacity={1}
                        >
                            <Btn 
                                hovered={hovered || getPage.page.current.path === data.path}
                            >
                                {data.icon}
                                { !setting.hide ? <MenuText hovered={hovered || getPage.page.current.path === data.path}>{data.name}</MenuText> : null}
                            </Btn>
                        </TouchView>
                    )}
                </Hoverable>
            ))}
        </LeftContainer>
    )
}

export default Left;


const Btn = styled.View<Theme>`
    width: 95%;
    height: 37px;
    /* padding: 10px 0; */
    background-color: ${(props) => props.hovered ? props.theme.color.primaryColor : 'transparent'};
    border-radius: 8px;
    padding-left: 23px;
    cursor: pointer;
    transition: all .2s;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`


const TouchView = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const MenuText = styled.Text<Theme>`
    color: ${(props) => props.hovered ? props.theme.color.white : props.theme.color.textGray};
    font-size: ${(props) => props.theme.fontSize.Regular};
    font-weight: 600;
`

