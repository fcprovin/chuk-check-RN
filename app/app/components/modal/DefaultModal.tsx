
import settingSlice from "@/app/redux/slices/setting";
import { RootState } from "@/app/redux/store/reducers";
import { Btn, CustomText } from "@/app/styles/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native"
import TextInput from "../Input/TextInput";
import { useState } from "react";
import { Theme } from "@/app/types/type";
import TeamCode from "./TeamCode";

interface IModalProps{
    code:string
}

function DefaultModal(props:IModalProps){
    const { code } = props
    const setting = useSelector((state:RootState) => state.setting.modal.default)

    return(
        <ModalLayOut
             animationType="fade" //모달 효과
             transparent={true} //배경화면 투명
             visible={setting} //모달 페이지 표시 여부
        >
             <ModalLayout>
                {code === "TeamCode" ? <TeamCode /> : null }
             </ModalLayout>
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
    height: 100%;
    background-color: #50505050;
    display: flex;
    align-items: center;
    padding-top: 10%;
`

