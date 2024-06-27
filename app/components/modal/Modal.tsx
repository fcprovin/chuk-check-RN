import { Dimensions, Platform, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { TIDALURI } from "../../constants/constants";
import { ModalContent } from "../../styles/style";
import XIcon from "@/app/icons/XIcon";
import RoseLogin from "./RoseLogin";
import { Theme } from "@/app/types/type";
import { useEffect, useState } from "react";
import { useResizeWindow } from "@/app/hooks/useResizeWindow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/reducers";
import settingSlice from "@/app/redux/slices/setting";


interface IModal{
    entity: string
}


function Modal(props:IModal){
    const { entity } = props
    const [screenWidth, setScreenWidh] = useState(Math.ceil(Dimensions.get('window').width))
    const [ screenHeight, setScreenHeight] = useState(Math.ceil(Dimensions.get('window').height))
    const { resize }  = useResizeWindow()
    const getModal = useSelector((state:RootState) => state.setting.modal)
    const dispatch = useDispatch();

    useEffect(() => {
        const update = () => {
            setScreenWidh( Math.ceil(Dimensions.get('window').width) )
            setScreenHeight( Math.ceil(Dimensions.get('window').height) )
        }

        setTimeout(() => {
            update()
        }, 100)

    },[resize])

    return(
        <ModalLayOut
            animationType="fade"
            transparent={true}
            visible={getModal}>

            <ModalLayout screenWidth={screenWidth} screenHeight={screenHeight}>

                <ModalContent>

                    <Cancle
                            onPress={() => {
                                dispatch(
                                    settingSlice.actions.setRoseModal(false)
                                )
                            }}
                        >
                            <XIcon />
                    </Cancle>

                    { entity === "tidal" ? 
                        Platform.OS === 'web' ? 
                            <iframe 
                                src={TIDALURI}
                                style={{"width": "100%", "height": "100%"}}
                                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
                            />
                        : <WebView 
                            style={{"width": "100%", "height": "100%"}}
                            source={{"uri" : TIDALURI}}
                        /> 
                        : null }

                    { entity === "rose" ?
                        <RoseLogin /> : null }
                </ModalContent>
            </ModalLayout>
        </ModalLayOut>
    )
}

export default Modal;

const ModalLayOut = styled.Modal<Theme>`
    position: relative;
    top: 0;
    left: 0;
`

const ModalLayout = styled.View<any>`
    width: ${(props) => `${props.screenWidth}px`};
    height:  ${(props) => `${props.screenHeight}px`};
    background-color: rgba(19, 19, 19, 0.7);
    display: flex;
    align-items: center;
    padding-top: 100px;
    transition: .3s;
`

const Cancle = styled.TouchableOpacity<Theme>`
    width: 30px;
    height: 30px;
    padding-top: 10px;
    padding-right: 10px;
`