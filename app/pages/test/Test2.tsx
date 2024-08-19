import { usePage } from "@/app/hooks/usePage";
import pageSlice from "@/app/redux/slices/page";
import { RootState } from "@/app/redux/store/reducers";
import { Btn, CustomText, MainConLayOut } from "@/app/styles/GlobalStyle";
import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";


function Test2(){
    const dispatch = useDispatch()
    //page state 가져오기
    const getPage = useSelector((state:RootState) => state.page.page.current)
    //page 이동 및 history 저장
    const { setSettingPage } = usePage();
    return(
        <MainConLayOut>
            <Text>테스트2페이지</Text>

            <Btn
                type="type2"
                custombackGround="#333" customColor="#333"
                onPress={() =>
                        setSettingPage({
                            ...getPage,
                            path: "/test1",
                        })
                      }
            >
                    <CustomText customColor="#fff" customFontSize="14px" customBold={700}>Test1 페이지 전환</CustomText>
            </Btn>
        </MainConLayOut>
    )
}

export default Test2;