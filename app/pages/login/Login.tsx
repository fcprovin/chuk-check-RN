import { CustomText, MainConLayOut } from "@/app/styles/GlobalStyle"
import { Image, TouchableOpacity } from "react-native"
import styled from "styled-components/native"




function Login(){
  
    return(
        <MainConLayOut style={{justifyContent: "space-around"}}>
            <Box>
                <Image style={{width: 194, height: 89}} source={require("../../../assets/icons/blackLogo.png")}/>
                <CustomText customColor="#111111" customFontSize="16px" customBold={700}>
                더 나은 축구 경험을 체크하세요.
                </CustomText>
            </Box>

            <Box>
                <TouchableOpacity >
                    <Image style={{width: 300, height: 45}} source={require("../../../assets/icons/kakao.png")}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{width: 300, height: 45}} source={require("../../../assets/icons/google.png")}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{width: 300, height: 45}} source={require("../../../assets/icons/apple.png")}/>
                </TouchableOpacity>
            </Box>
        </MainConLayOut>
    )
}

export default Login

const Box = styled.View`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`