import { RootState } from "@/app/redux/store/reducers";
import { CustomText, MainConLayOut, Scroll } from "@/app/styles/GlobalStyle";
import { useSelector } from "react-redux";
import styled from "styled-components/native";




function Home(){
    const user = useSelector((state:RootState) => state.user)
    return (
        <Scroll>
            <MainConLayOut>
                <Container>
                    <CustomText customFontSize="14px" customBold={700}>
                        홈 페이지
                    </CustomText>
                    <CustomText customFontSize="14px" customBold={700}>유저 정보</CustomText>
                    <CustomText customFontSize="14px" customBold={700}>
                        {JSON.stringify(user, null, 2)}
                    </CustomText>
                </Container>
            </MainConLayOut>
        </Scroll>
    )
}

export default Home;

const Container = styled.View`
  width: 85%;
  display: flex;
  gap: 10px;
`;
