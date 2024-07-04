
import settingSlice from "@/app/redux/slices/setting";
import { RootState } from "@/app/redux/store/reducers";
import { Btn, CustomText } from "@/app/styles/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native"



function DefaultModal(){
    const setting = useSelector((state:RootState) => state.setting.modal.default)
    const dispatch = useDispatch()

    return(
        <ModalLayOut
             animationType="fade"
             transparent={true}
             visible={setting}
        >
             <ModalLayout>
                <ModalContent>
                    <Btn 
                        onPress={() => dispatch(settingSlice.actions.setDefaultModal(false))}
                        custombackGround="#333">
                        <CustomText customColor="#fff" customSize="14px" customBold={700}>모달 닫기</CustomText>
                    </Btn>
                </ModalContent>
             </ModalLayout>
        </ModalLayOut>
    )
}

export default DefaultModal;

const ModalLayOut = styled.Modal`
    position: relative;
    top: 0;
    left: 0;
`

const  ModalLayout = styled.View`
    width: 100%;
    height: 100%;
    background-color: #50505050;
    display: flex;
    align-items: center;
    padding-top: 10%;
`

const ModalContent = styled.View`
    width: 368px;
    height: 294px;
    background-color: #fff;
    border-radius: 10px;
`