import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Test1 from "./pages/test/Test1";
import Test2 from "./pages/test/Test2";
import { Router, Routes, Route } from "./routing";
import { Platform, Text, View } from 'react-native';
import { useAppDispatch } from "./redux/store"
import { useLocalSave } from "./hooks/useLocalSave";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/reducers";




function RoseRoute(){
    const dispatch = useAppDispatch();
    const { getLocalData } = useLocalSave();



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