import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Test1 from "./pages/test/Test1";
import Test2 from "./pages/test/Test2";
import { Router, Routes, Route } from "./routing";
import { Platform, Text, View } from 'react-native';
import settingSlice from './redux/slices/setting';
import { useAppDispatch } from "./redux/store"
import { useLocalSave } from "./hooks/useLocalSave";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/reducers";




function RoseRoute(){
    const dispatch = useAppDispatch();
    const { getLocalData } = useLocalSave();
    const getOs = useSelector((state:RootState) => state.setting.os)


    const sendMessage = () => {
      if (window?.electron) {
        window?.electron.sendMessage('message', 'start electron');
      }
    };

  useEffect(() => {
   
    switch(Platform.OS){
        case 'web':
          sendMessage();
          if (window?.electron) {
            window?.electron.onMessage('reply', (data) => {
              if(data){
                dispatch(settingSlice.actions.setDeviceOs({'os' : 'electron'}))
              }
            });
          }else{
            dispatch(settingSlice.actions.setDeviceOs({'os' : 'web'})) 
          }
          break;
        
        case 'android':
        case 'ios': 
          dispatch(settingSlice.actions.setDeviceOs({'os' : Platform.OS})
          )
          break;

        default:
          console.log(Platform.OS)
      }
   
  },[])

  useEffect(() => {

      getLocalData({type: "roseUser"})

  },[getOs])

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="*" element={
          <View>
            <Text>에러페이지</Text>
          </View>
        } />
      </Routes>
    </Router>
  )
}



export default RoseRoute;