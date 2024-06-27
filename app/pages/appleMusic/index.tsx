import { TidalIcon } from "@/app/icons/sidebar/TidalIcon";
import { VideoIcon } from "@/app/icons/sidebar/VideoIcon";
import { LoginBtn, LoginDesc, LoginLayout, LoginTitle } from "@/app/styles/GlobalStyle";
import { Theme } from "@/app/types/type";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";





function AppleMusic(){


    return(
        <LoginLayout>
            <LoginTitle>Apple Music</LoginTitle>
            <LoginDesc>로그인하시면 다양한 서비스를 이용하실 수 있습니다.</LoginDesc>
            {/* <TouchableOpacity
                onPress={() => {
                    console.log("클릭")
                }}>
                <LoginBtn>LOGIN</LoginBtn>
            </TouchableOpacity> */}
        </LoginLayout>
    )
}

export default AppleMusic;
