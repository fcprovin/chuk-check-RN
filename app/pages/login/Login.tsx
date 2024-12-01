import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Linking } from "react-native";
import styled from "styled-components/native";
import { CustomText, MainConLayOut } from "@/app/styles/GlobalStyle";
import DefaultModal from "@/app/components/modal/DefaultModal";
import { useAppDispatch } from "@/app/redux/store";
import settingSlice from "@/app/redux/slices/setting";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/reducers";



function Login({ navigation }: { navigation: any }) {
  const dispatch = useAppDispatch();
  const setting = useSelector((state:RootState) => state.setting.modal.default)
  const user = useSelector((state:RootState) => state.user)

  useEffect(() => {
    if(user.googleUser?.email){
      navigation.navigate("layout")
    }
  }, [user])

  return (
    <MainConLayOut style={{ justifyContent: "space-around" }}>
      <Box>
        <Image
          style={styles.logo}
          source={require("../../../assets/icons/blackLogo.png")}
        />
        <CustomText customColor="#111111" customFontSize="16px" customBold={700}>
          더 나은 축구 경험을 체크하세요.
        </CustomText>
      </Box>

      <Box>
        <TouchableOpacity onPress={() => {
          dispatch(settingSlice.actions.setDefaultModal("kakao"))
        }}>
          <Image
            style={styles.button}
            source={require("../../../assets/icons/kakao.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(settingSlice.actions.setDefaultModal("google"))} >
          <Image
            style={styles.button}
            source={require("../../../assets/icons/google.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(settingSlice.actions.setDefaultModal("apple"))}>
          <Image
            style={styles.button}
            source={require("../../../assets/icons/apple.png")}
          />
        </TouchableOpacity>
      </Box>

      <DefaultModal code={setting}/>
    </MainConLayOut>
  );
}

export default Login;

// 스타일 정의
const styles = StyleSheet.create({
  logo: {
    width: 194,
    height: 89,
  },
  button: {
    width: 300,
    height: 45,
  },
});

const Box = styled.View`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;