import { RootState } from "@/app/redux/store/reducers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import TextInput from "../../Input/TextInput";
import { Btn, CustomText, ModalContent } from "@/app/styles/GlobalStyle";
import { WebViewShow } from "../../webView/WebViewShow";
import { Dimensions } from "react-native";

const KAKAO_CLIENT_ID = "020225603b6716b209c0a93dc55a0654"; // 카카오 JavaScript 키
//const REDIRECT_URI = "https://auth.expo.io/@wanghsoo/chuckcheck/auth/kakao/callback";
const REDIRECT_URI = "http://192.168.219.195:8081";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
const KAKAO_TOKEN_URL = "https://kauth.kakao.com/oauth/token";
const KAKAO_USER_INFO_URL = "https://kapi.kakao.com/v2/user/me";




function KakaoLogin(){
  const [isHandled, setIsHandled] = useState(false);

  

  const handleNavigationStateChange = async(navState: any) =>{
    if (isHandled) return;


    const Url = new URL(navState?.url);
    const searchParam = new URLSearchParams(Url?.search);

    console.log(searchParam)
   if(searchParam.get('code') !== null) {
        setIsHandled(true);

        const token = searchParam.get('code') as string;
        console.log(token)
    }
        
  }



    return(
        <ModalContent
            customWidth="40%"
            customHeight='90%'
        >
        <WebViewShow 
            style={{}}
            uri={KAKAO_AUTH_URL}
            onNavigationStateChange={handleNavigationStateChange}
        /> 
        </ModalContent>
    )
}

export default KakaoLogin;