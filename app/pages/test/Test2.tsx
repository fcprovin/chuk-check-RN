import pageSlice from "@/app/redux/slices/page";
import { Btn, CustomText } from "@/app/styles/GlobalStyle";
import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";


function Test2(){
    const dispatch = useDispatch()

    return(
        <View>
            <Text>테스트2페이지</Text>

            <Btn
                    custombackGround="#333" customColor="#333"
                    onPress={() => dispatch(pageSlice.actions.setCurrentPage({
                        "path": "/test1",
                        "type" : "",
                        "param1": "",
                        "param2": "",
                        "param3": "",

                    }))}
                >
                    <CustomText customColor="#fff" customSize="14px" customBold={700}>Test1 페이지 전환</CustomText>
                </Btn>
        </View>
    )
}

export default Test2;