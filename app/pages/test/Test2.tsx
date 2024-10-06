
import pageSlice from "@/app/redux/slices/page";
import { RootState } from "@/app/redux/store/reducers";
import { Btn, CustomText, MainConLayOut } from "@/app/styles/GlobalStyle";
import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";


function Test2({navigation}:{navigation:any}){
    const dispatch = useDispatch()
    //page state 가져오기
    const getPage = useSelector((state:RootState) => state.page.page.current)

    return(
        <MainConLayOut>
            <Text>테스트2페이지</Text>

            <Btn
                type="type2"
                custombackGround="#333" customColor="#333"
                onPress={() =>
                        // setSettingPage({
                        //     ...getPage,
                        //     path: "/test1",
                        // })
                        navigation.pop()
                      }
            >
                    <CustomText customColor="#fff" customFontSize="14px" customBold={700}>Test1 페이지 전환</CustomText>
            </Btn>
        </MainConLayOut>
    )
}

export default Test2;