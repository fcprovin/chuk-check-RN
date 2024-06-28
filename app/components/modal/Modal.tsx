import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { TIDALURI } from "../../constants/constants";
import { ModalContent } from "../../styles/style";
import XIcon from "@/app/icons/XIcon";
import RoseLogin from "./RoseLogin";
import { Theme } from "@/app/types/type";
import { useEffect, useRef, useState } from "react";
import { useResizeWindow } from "@/app/hooks/useResizeWindow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/reducers";
import settingSlice from "@/app/redux/slices/setting";
import { postTidalLogin } from "@/app/api/TidalAPI";
import { useLocalSave } from "@/app/hooks/useLocalSave";


interface IModal{
    entity: string
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Modal(props:IModal){
    const { entity } = props
    const [screenWidth, setScreenWidh] = useState(Math.ceil(Dimensions.get('window').width))
    const [ screenHeight, setScreenHeight] = useState(Math.ceil(Dimensions.get('window').height))
    const { resize }  = useResizeWindow()
    const getModal = useSelector((state:RootState) => state.setting.modal)
    const dispatch = useDispatch();
    const { saveLocalData } = useLocalSave()

    useEffect(() => {
        const update = () => {
            setScreenWidh( Math.ceil(Dimensions.get('window').width) )
            setScreenHeight( Math.ceil(Dimensions.get('window').height) )
        }

        setTimeout(() => {
            update()
        }, 100)

    },[resize])

    const handleNavigationStateChange = (navState: any) =>{
        const Url = new URL(navState.url)
        const searchParam = new URLSearchParams(Url.search)

        if(searchParam.get('code') !== null){
            dispatch(
                settingSlice.actions.setRoseModal(false)
            )

            const tidalToken = searchParam.get('code') as string
            postTidalLogin(tidalToken, dispatch, saveLocalData)

            
        }
    }

   
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
                                style={{"width": "100%", "height": "100%", "border": "none"}}
                                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
                            />
                        : 
                        <SafeAreaView style={styles.container}>
                            <WebView 
                                originWhitelist={['*']}
                                style={styles.webview}
                                source={{
                                    uri : TIDALURI,
                                    
                                }}
                                onNavigationStateChange={handleNavigationStateChange}
                            /> 
                        </SafeAreaView>
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
    height: 50px;
    padding-top: 10px;
    padding-right: 10px;
`

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    webview: {
      flex: 1,
      width: windowWidth,
      height: windowHeight,
    },
  });