import { RootState } from "@/app/redux/store/reducers";
import { useState } from "react";
import { useDispatch } from "react-redux";

import TextInput from "../Input/TextInput";
import { Btn, CustomText, ModalContent } from "@/app/styles/GlobalStyle";
import settingSlice from "@/app/redux/slices/setting";





function TeamCode(){
    const [value, setValue] = useState("");
    
    const dispatch = useDispatch()

    return(
        <ModalContent
            customWidth="368px"
            customHeight="202px"
        >

            <CustomText customColor="#111111" customFontSize="20px" customBold={700}>팀 코드를 입력하세요.</CustomText>
            
            <TextInput 
                placeHolder=""
                text={value}
                setText={setValue}
                password={false}
                height="40px"
                type="type1"
            />

            
            <Btn 
                customWidth="296px"
                customHeight="40px"
                onPress={() => dispatch(settingSlice.actions.setDefaultModal(false))}
                custombackGround="#333">
                <CustomText customColor="#fff" customFontSize="14px" customBold={700}>팀가입하기</CustomText>
            </Btn>


        </ModalContent>
    )
}

export default TeamCode;