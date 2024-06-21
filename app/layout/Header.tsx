import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Theme } from "../styles/type";
import { RootState } from "../redux/store/reducers";
import { useSelector } from "react-redux";
import { Remocon } from "../icons/Remocon";
import Hoverable from "react-native-hoverable";
import { ELECTRONHEADERBTN } from "../constants/constants";

function Header() {
  const getOs = useSelector((state:RootState) => state.setting);
  const [maxClick, setMaxClick] = useState(false);


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

  console.log(maxClick)
  return (
    <Container>
      <HeaderBtn>
        <BtnBox>
            <Remocon size="18px" />
        </BtnBox>
        {/* 일렉트론 일 경우 창 컨트롤 영역 */}
        {getOs.os === "electron" ? 
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
  justify-content: flex-end;
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

// <Hoverable
//               style={ ({hovered}) => [
//                 {display: 'flex'},
//                 {flexDirection: 'row'}
//             ]}>
//               {({hovered}) => (
//                 <ElectControl>

//                   <BtnBox
//                       onPress={() => handleMouseLeave('minimize')}
//                       hovered={hovered}
//                   >
//                       <ElectronMini size="12px" />
//                   </BtnBox>

//                   {maxClick ? 
//                       <BtnBox
//                           onPress={() => handleMouseLeave('maximize')}
//                           hovered={hovered}
//                       >
//                           <ElectronMiniMize size="12px" />
//                       </BtnBox> : 
//                       <BtnBox
//                           onPress={() => handleMouseLeave('maximize')}
//                           hovered={hovered}
//                       >
//                           <ElectronMinMax size="12px" />
//                       </BtnBox>
//                   }

//                   <BtnBox
//                       onPress={() => handleMouseEnter("close")}
//                       hovered={hovered}
//                   >
//                       <ElectronClose size="12px" />
//                   </BtnBox>


//                 </ElectControl>
//               )}
//            </Hoverable>