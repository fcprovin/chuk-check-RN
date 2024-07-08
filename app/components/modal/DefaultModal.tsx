
import settingSlice from "@/app/redux/slices/setting";
import { RootState } from "@/app/redux/store/reducers";
import { Btn, CustomText } from "@/app/styles/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native"
import TextInput from "../Input/TextInput";
import { useState } from "react";

interface IModalProps{
    title:string
    closeBtnTitle: string
}

function DefaultModal(props:IModalProps){
    const { title, closeBtnTitle} = props
    const [value, setValue] = useState("");
    const setting = useSelector((state:RootState) => state.setting.modal.default)
    const dispatch = useDispatch()

    return(
        <ModalLayOut
             animationType="fade" //모달 효과
             transparent={true} //배경화면 투명
             visible={setting} //모달 페이지 표시 여부
        >
             <ModalLayout>
                <ModalContent>

                    <CustomText customColor="#111111" customFontSize="20px" customBold={700}>{title}</CustomText>
                    
                    <TextInput 
                        placeHolder=""
                        text={value}
                        setText={setValue}
                        password={false}
                        width="296px"
                        height="40px"
                    />

                    
                    <Btn 
                        customWidth="296px"
                        customHeight="40px"
                        onPress={() => dispatch(settingSlice.actions.setDefaultModal(false))}
                        custombackGround="#333">
                        <CustomText customColor="#fff" customFontSize="14px" customBold={700}>{closeBtnTitle}</CustomText>
                    </Btn>


                </ModalContent>
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

const ModalContent = styled.View`
    width: 368px;
    height: 202px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`