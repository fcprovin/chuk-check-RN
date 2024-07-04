import styled from "styled-components/native";
import { Theme } from "../../types/type";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/reducers";
import {Btn, CustomText, MainConLayOut} from "../../styles/GlobalStyle"
import React from "react";
import DefaultModal from "@/app/components/modal/DefaultModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import settingSlice from "@/app/redux/slices/setting";
import pageSlice from "@/app/redux/slices/page";


function Test1(){
    const dispatch = useDispatch()

    return(
        <MainConLayOut>
            <Container>
                <TextTest>테스트페이지</TextTest>
                <Btn
                    custombackGround="#333" customColor="#333"
                    onPress={() => dispatch(settingSlice.actions.setDefaultModal(true))}
                >
                    <CustomText customColor="#fff" customSize="14px" customBold={700}>모달 등장</CustomText>
                </Btn>


                <Btn
                    custombackGround="#333" customColor="#333"
                    onPress={() => dispatch(pageSlice.actions.setCurrentPage({
                        "path": "/test2",
                        "type" : "",
                        "param1": "",
                        "param2": "",
                        "param3": "",

                    }))}
                >
                    <CustomText customColor="#fff" customSize="14px" customBold={700}>Test2 페이지 전환</CustomText>
                </Btn>


                <Btn
                    custombackGround="#333" customColor="#333">
                    <CustomText customColor="#fff" customSize="14px" customBold={700}>버튼 예시</CustomText>
                </Btn>

                <Btn
                    custombackGround="#fff" customColor="#000">
                    <CustomText customColor="#333" customSize="14px" customBold={700}>버튼 예시</CustomText>
                </Btn>
            </Container>
            <DefaultModal />
        </MainConLayOut>
    )
}



const TextTest = styled.Text<Theme>`

`

const Container = styled.View`
    width: 85%;
    display: flex;
    gap: 10px;
`

export default Test1;