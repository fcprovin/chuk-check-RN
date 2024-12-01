import { RootState } from "@/app/redux/store/reducers";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native"
import TeamCode from "./TeamCode";
import KakaoLogin from "./KakoLogin/KakaoLogin";

import { useAppDispatch } from "@/app/redux/store";
import settingSlice from "@/app/redux/slices/setting";
import { useState } from "react";
import { Dimensions, TouchableWithoutFeedback, View } from "react-native";
import GoogleLogin from "./GoogleLogin/GoogleLogin";

interface IModalProps{
    code:string
}

const Height = Math.ceil(Dimensions.get('window').height);

function DefaultModal(props:IModalProps){
    const { code } = props

    const dispatch = useAppDispatch()
    const setting = useSelector((state:RootState) => state.setting.modal.default)

    return(
        <ModalLayOut
             animationType="fade" //모달 효과
             transparent={true} //배경화면 투명
             visible={setting !== ""} //모달 페이지 표시 여부
        >
            <TouchableWithoutFeedback onPress={() => dispatch(settingSlice.actions.setDefaultModal(""))}>
                <ModalLayout>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <View>
                            {code === "TeamCode" ? <TeamCode /> : null }
                            {code === "kakao" ? <KakaoLogin /> : null }
                            {code === "google" ? <GoogleLogin /> : null }
                        </View>
                    </TouchableWithoutFeedback>
                </ModalLayout>
            </TouchableWithoutFeedback>
        </ModalLayOut>
    )
}

export default DefaultModal;

const ModalLayOut = styled.Modal`
    position: relative;
    top: 0;
    left: 0;
`

const  ModalLayout = styled.View`
    width: 100%;
    height: ${`${Height}px`};
    background-color: #50505050;
    display: flex;
    align-items: center;
    padding-top: 10%;
`

