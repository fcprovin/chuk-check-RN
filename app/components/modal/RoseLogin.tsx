import { Theme } from "@/app/types/type";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import TextInput from "../Input/TextInput";
import { LoginBtn, LoginBtnBox } from "@/app/styles/GlobalStyle";
import { postRoseLogin } from "@/app/api/RoseAPI";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "@/app/redux/slices/user";
import settingSlice from "@/app/redux/slices/setting";
import { RootState } from "@/app/redux/store/reducers";
import { useLocalSave } from "@/app/hooks/useLocalSave";

function RoseLogin(){
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const dispatch = useDispatch();
    const { saveLocalData } = useLocalSave()
   
    

    const ClickLogin = async() => {
        if(id !== "" && pw !== ""){
            const result = await postRoseLogin({id, pw})

            if(result?.code === "200"){
                const res = result
                delete res.code
                delete res.message

                const send = {
                    data: res,
                    type: "roseUser"
                }

                saveLocalData(send)

                dispatch(
                    userSlice.actions.setRose(res)
                )

                dispatch(
                    settingSlice.actions.setRoseModal(false)
                )
            }
        }
    }

    return(
        <ModalLayout>
            <Title>로그인</Title>

            <InputBox>
                <TextInput placeHolder="e-mail" text={id} setText={setId} password={false} />
                <TextInput placeHolder="패스워드" text={pw} setText={setPw} password={true} />
                <LoginBtnBox 
                    inColor={true}
                    onPress={ClickLogin}>
                    <LoginBtn inColor={true}>로그인</LoginBtn>
                </LoginBtnBox>
                <Find>아이디 | 비밀번호 찾기</Find>
                <Line />
                <LoginBtnBox inColor={true}>
                    <LoginBtn inColor={false}>회원가입</LoginBtn>
                </LoginBtnBox>
            </InputBox>
        </ModalLayout>
    )
}

export default RoseLogin;


const ModalLayout = styled.View<Theme>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.black};
    display: flex;
    align-items: center;
    border-radius: 15px;
`

const Title = styled.Text<Theme>`
    color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 600;
    margin-top: 60px;
`


const InputBox = styled.View`
    width: 100%;
    margin-top: 47px;
    display: flex;
    align-items: center;
    gap: 10px;
`
const Find = styled.Text<Theme>`
    color: ${(props) => props.theme.color.textGray};
    font-size: ${(props) => props.theme.fontSize.small};
`

const Line = styled.View<Theme>`
    width: 90%;
    height: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #4d4d4d;
`

