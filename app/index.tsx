import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Test1 from "./pages/test/Test1";
import Test2 from "./pages/test/Test2";
import { Router, Routes, Route } from "./routing";
import { Platform, Text, View } from 'react-native';
import settingSlice from './redux/slices/setting';
import { useAppDispatch } from "./redux/store"



function RoseRoute(){
    const dispatch = useAppDispatch();

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
                dispatch(
                  settingSlice.actions.setDeviceOs({
                    'os' : 'electron'
                  })
                )
              }
            });
          }else{
            dispatch(
              settingSlice.actions.setDeviceOs({
                'os' : 'web'
              })
            )
          }
          break;
        
        case 'android': 
          dispatch(
            settingSlice.actions.setDeviceOs({
              'os' : 'android'
            })
          )
          break;

        case 'ios':
          dispatch(
            settingSlice.actions.setDeviceOs({
              'os' : 'ios'
            })
          )
          break;

        default:
          console.log(Platform.OS)
      }
  },[])

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