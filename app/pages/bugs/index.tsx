import { BugsIcon } from "@/app/icons/sidebar/BugsIcon";
import { QobuzIcon } from "@/app/icons/sidebar/Qobuz";
import { TidalIcon } from "@/app/icons/sidebar/TidalIcon";
import { LoginBtn, LoginDesc, LoginLayout, LoginTitle } from "@/app/styles/GlobalStyle";
import { Theme } from "@/app/types/type";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";





function Bugs(){


    return(
        <LoginLayout>
            <BugsIcon width="180px" height="150px"/>
            <LoginTitle>BUGS</LoginTitle>
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

export default Bugs;
