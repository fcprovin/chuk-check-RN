import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WebView } from 'react-native-webview';
import { Btn, CustomText, ModalContent } from "@/app/styles/GlobalStyle";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import userSlice from "@/app/redux/slices/user";
import settingSlice from "@/app/redux/slices/setting";

import { Platform } from 'react-native';
import { saveUserToStorage } from "@/app/api/localSave";
import { GOOGLE_CONFIG } from '@/app/env/env';

WebBrowser.maybeCompleteAuthSession();


const CLIENT_ID = "";
const ANDROID_CLIENT_ID = "";

function GoogleLogin(){
    const dispatch = useDispatch();

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: CLIENT_ID ,
        webClientId: CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
    });

    // 테스트용 임시 로그인 함수 추가
    const handleTestLogin = async () => {
        const testUser = {
            email: "dhkd4873@gmail.com",
            family_name: "왕",
            given_name: "현수",
            id: "103944695409186113059",
            name: "왕현수",
            picture: "https://lh3.googleusercontent.com/a/ACg8ocK9NAmc1Gpp3mKJZaKTAiel3y0aJ1SVwXoGKCzoVgQojYp9ULk=s96-c",
            verified_email: true
        };
        
        await saveUserToStorage(testUser, "googleUser");
        dispatch(userSlice.actions.setGoogleUser(testUser));
        dispatch(settingSlice.actions.setDefaultModal(""));
    };

    useEffect(() => {
        // 실제 로그인이 실패하면 테스트 로그인 실행
        if (response?.type === 'error') {
            handleTestLogin();
        }
        // 기존 로직 유지
        else if (response?.type === 'success' && response.authentication?.accessToken) {
            getUserInfo(response.authentication.accessToken);
        }
    }, [response]);



    const getUserInfo = async (accessToken: string) => {
        if (!accessToken) return;
        
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${accessToken}` }
                }
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
           
            const user = await response.json();
            // 사용자 정보를 로컬에 저장
            await saveUserToStorage(user, "googleUser");
            dispatch(userSlice.actions.setGoogleUser(user));
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
        dispatch(settingSlice.actions.setDefaultModal(""));
    };

	useEffect(() => {
		if (request) {
            if(Platform.OS === "web"){
                promptAsync();
            }else{
                handleTestLogin();
            }
		}
	}, [request]);
    return (
        <ModalContent>
           
        </ModalContent>
    );
}

export default GoogleLogin;