import Modal from "@/app/components/modal/Modal";
import { TidalIcon } from "@/app/icons/sidebar/TidalIcon";
import settingSlice from "@/app/redux/slices/setting";
import { RootState } from "@/app/redux/store/reducers";
import { LoginBtn, LoginBtnBox, LoginDesc, LoginLayout, LoginTitle } from "@/app/styles/GlobalStyle";
import { Theme } from "@/app/types/type";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";





function Tidal(){
    const getModal = useSelector((state:RootState) => state.setting.modal)
    const dispatch = useDispatch();

    return(
        <View>
            <LoginLayout>
                <TidalIcon width="180px" height="150px"/>
                <LoginTitle>TIDAL</LoginTitle>
                <LoginDesc>로그인하시면 다양한 서비스를 이용하실 수 있습니다.</LoginDesc>
                <LoginBtnBox
                    onPress={() => {
                        dispatch(
                            settingSlice.actions.setRoseModal(true)
                        )
                    }}>
                    <LoginBtn>LOGIN</LoginBtn>
                </LoginBtnBox>

                
            </LoginLayout>
            {getModal ? <Modal entity={"tidal"}  /> : null}
        </View>
    )
}

export default Tidal;
