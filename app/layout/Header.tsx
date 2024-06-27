import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Theme } from "../types/type";
import { RootState } from "../redux/store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Remocon } from "../icons/Remocon";
import Hoverable from "react-native-hoverable";
import { ELECTRONHEADERBTN } from "../constants/constants";
import { Platform, Text } from "react-native";
import settingSlice from "../redux/slices/setting";

function Header() {
  const dispatch = useDispatch();
  const getOs = useSelector((state:RootState) => state.setting);
  const [maxClick, setMaxClick] = useState(false);
  const [winMacSet, setWinMacset] = useState(false);


  const handleMouseLeave = (type:string) => {
    if(getOs.os === 'electron'){
        if(window.electron){
            window.electron.sendMessage(type, type)

            if(type === "maximize"){
                setMaxClick( e => !e )
            }
        }

    }
  };
  

  useEffect(() => {
    if(getOs.os === 'electron'){
      if(navigator.userAgent.indexOf('Windows') !== -1){
        setWinMacset(true)
      }else{
        setWinMacset(false)
      }
    }
  },[getOs])
  
  return (
    <Container>
      <LeftBox>
        {Platform.OS === "web" ? 
          <SideBarHideBox
            onPress={() => {
              dispatch(
                settingSlice.actions.setHideSide({
                  "hide" : !getOs.hide
                })
              )
            }}
          >
            <HideContent hideWidth={getOs.hide} />
          </SideBarHideBox> : null}
      </LeftBox>

      <HeaderBtn>
        <BtnBox>
            <Remocon width="18px" />
        </BtnBox>
        {/* 일렉트론 일 경우 창 컨트롤 영역 */}
        {getOs.os === "electron" && winMacSet? 
           ELECTRONHEADERBTN.map( (data, idx) => (
            <Hoverable
              key={idx}
              style={ ({hovered}) => [
                {display: 'flex'},
                {flexDirection: 'row'}
            ]}> 
              {({hovered}) => (
                 data.name !== "maximize" || data.cover === !maxClick ? 
                 <BtnBox
                      onPress={() => handleMouseLeave(data.name)}
                      hovered={hovered}
                      hoverColor={data.hoverColor}
                  >
                      {data.icon}
                  </BtnBox> : null
              )}
            </Hoverable>
           ))
        : null}
      </HeaderBtn>
    </Container>
  );
}

export default Header;

const Container = styled.View<Theme>`
  width: 100%;
  height: 46px;
  background-color: ${(props) => props.theme.color.footerBackGround};
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.color.textGray};
  -webkit-app-region: drag;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBtn = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnBox = styled.TouchableOpacity<Theme>`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* 추가적인 스타일링 */
  background-color: ${(props) => (props.hovered ? props.hoverColor : "transparent")};
  -webkit-app-region: no-drag;
`;

const LeftBox = styled.View`
  padding-left: 20px;
`
const SideBarHideBox = styled.TouchableOpacity`
  -webkit-app-region: no-drag;
  width: 17px;
  height: 17px;
  border: 1.5px solid #eeeeee;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const HideContent = styled.View<Theme>`
  transition: all .2s;
   -webkit-app-region: no-drag;
   width: 6px;
   height: 17px;
   background-color: ${(props) => props.hideWidth ? "" : "#eeeeee"};
   border-radius: 2px 0 0 2px;
   border: ${(props) => props.hideWidth ? "solid 1px #eeeeee" : "none"};
`
