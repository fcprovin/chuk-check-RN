import { RootState } from "@/app/redux/store/reducers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WebView } from 'react-native-webview'
import TextInput from "../../Input/TextInput";
import { Btn, CustomText, ModalContent } from "@/app/styles/GlobalStyle";
import { WebViewShow } from "../../webView/WebViewShow";

const KAKAO_CLIENT_ID = ""; // 카카오 JavaScript 키
const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";
const KAKAO_TOKEN_URL = "https://kauth.kakao.com/oauth/token";
const KAKAO_USER_INFO_URL = "https://kapi.kakao.com/v2/user/me";

// Redirect URI 생성
const REDIRECT_URI = "https://auth.expo.io/@wanghsoo/chuckcheck/auth/kakao/callback";
// const REDIRECT_URI = "http://localhost:8081";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;


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
	console.log( `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`)
    return(
        <ModalContent
            customWidth="100%"
            customHeight="100%"
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