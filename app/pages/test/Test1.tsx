import styled from "styled-components/native";
import { Theme } from "../../styles/type";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/reducers";
import deviceSlice from "../../redux/slices/device";
import {MainConLayOut} from "../../styles/GlobalStyle"
import React from "react";


function Test1(){
  //redux 조회
  const getInfo = useSelector((state:RootState) => state.device)
  console.log(getInfo)

  //redux update
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(
      deviceSlice.actions.setDeviceConnect({
        "name" : "RS250",
        "IP" : "192.168.1.225"
      })
    )
  },[])

    return(
        <MainConLayOut>
            <TextTest>테스트페이지</TextTest>
        </MainConLayOut>
    )
}



const TextTest = styled.Text<Theme>`
  color: ${(props) => props.theme.color.primaryColor};
`

export default Test1;