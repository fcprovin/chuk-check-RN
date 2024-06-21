import React from "react";
import { useAppDispatch } from "../redux/store";
import pageSlice from "../redux/slices/page";
import {LeftContainer} from "../styles/style";
import { SIDBARMENU } from "../constants/constants";
import styled from "styled-components/native";
import { Theme } from "../styles/type";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";



function Left(){
    const dispatch = useAppDispatch();
    const getPage = useSelector((state:RootState) => state.page);

    return(
        <LeftContainer >
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
                                <MenuText>{data.name}</MenuText>
                            </Btn>
                        </TouchView>

            ))}
        </LeftContainer>
    )
}

export default Left;

//hovered={getPage.page.current.path === data.path}
const Btn = styled.View<Theme>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding-left: 23px;
    cursor: pointer;
    transition: all .4s;
    display: flex;
    justify-content: center;
`
const TouchView = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    display: flex;

`

const MenuText = styled.Text<Theme>`
    color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.fontSize.small};
`

