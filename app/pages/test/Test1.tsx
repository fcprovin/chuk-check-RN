import styled from "styled-components/native";
import { Theme } from "../../types/type";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/reducers";
import {Btn, CustomText, MainConLayOut} from "../../styles/GlobalStyle"
import React from "react";
import DefaultModal from "@/app/components/modal/DefaultModal";
import { Text } from "react-native";
import settingSlice from "@/app/redux/slices/setting";
import pageSlice from "@/app/redux/slices/page";
import TextInput from "@/app/components/Input/TextInput";


function Test1(){
    //상태 전달 함수
    const dispatch = useDispatch()
    const [value, setValue] = useState("");

    return(
        <MainConLayOut>
            <Container>
                <TextTest>테스트페이지</TextTest>
                <Btn
                    customWidth="368px"
                    customHeight="40px"
                    custombackGround="#fff" customColor="#000"
                    //onPress 클릭 이벤트 
                    //dispatch 상태 업데이트 
                    onPress={() => dispatch(settingSlice.actions.setDefaultModal(true))}
                >
                    <CustomText customColor="#333" customFontSize="14px" customBold={700}>모달 등장</CustomText>
                </Btn>


                <Btn
                    customWidth="178px"
                    customHeight="40px"
                    custombackGround="#333" customColor="#333"
                    onPress={() => dispatch(pageSlice.actions.setCurrentPage({
                        "path": "/test2",
                        "type" : "",
                        "param1": "",
                        "param2": "",
                        "param3": "",

                    }))}
                >
                    <CustomText customColor="#fff" customFontSize="14px" customBold={700}>Test2 페이지 전환</CustomText>
                </Btn>


                <Btn
                    customWidth="368px"
                    customHeight="40px"
                    custombackGround="#333" customColor="#333">
                    <CustomText customColor="#fff" customFontSize="14px" customBold={700}>버튼 예시</CustomText>
                </Btn>

                <Btn
                    customWidth="178px"
                    customHeight="40px"
                    custombackGround="#fff" customColor="#000">
                    <CustomText customColor="#333" customFontSize="14px" customBold={700}>버튼 예시</CustomText>
                </Btn>

                <TextInput 
                    placeHolder="텍스트 Input 예시"
                    text={value}
                    setText={setValue}
                    password={false}
                    width="368px"
                    height="40px"
                />

                <Text>Input 저장값</Text>
                <Text>{value}</Text>
            </Container>

            
            <DefaultModal title="팀 코드를 입력하세요." closeBtnTitle="팀가입하기"/>
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