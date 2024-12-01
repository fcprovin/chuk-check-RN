import styled from "styled-components/native";
import { Theme } from "../../types/type";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/reducers";
import { Btn, CustomText, MainConLayOut, Row, Scroll } from "../../styles/GlobalStyle";
import React from "react";
import DefaultModal from "@/app/components/modal/DefaultModal";
import { Text } from "react-native";
import settingSlice from "@/app/redux/slices/setting";
import pageSlice from "@/app/redux/slices/page";
import TextInput from "@/app/components/Input/TextInput";
import Card from "@/app/components/card/Card";

function Test1({ navigation }: { navigation: any }) {
  // 상태 전달 함수
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  //page state 가져오기
  const getPage = useSelector((state:RootState) => state.page.page.current)

  return (
    <Scroll>
      <MainConLayOut>
        <Container>
          <TextTest>테스트페이지</TextTest>
          <Btn
            type="type1"
            custombackGround="#fff"
            customColor="#000"
            // onPress 클릭 이벤트
            // dispatch 상태 업데이트
            onPress={() => dispatch(settingSlice.actions.setDefaultModal(true))}
          >
            <CustomText customColor="#333" customFontSize="14px" customBold={700}>
              모달 등장
            </CustomText>
          </Btn>

          <Btn
           type="type2"
            custombackGround="#333"
            customColor="#333"
            onPress={() =>
              navigation.navigate('Test2')
            }
          >
            <CustomText customColor="#fff" customFontSize="14px" customBold={700}>
              Test2 페이지 전환
            </CustomText>
          </Btn>

          <Row style={{justifyContent: "space-between"}}>
            <Btn
              type="type2"
              custombackGround="#333"
              customColor="#333"
            >
              <CustomText customColor="#fff" customFontSize="14px" customBold={700}>
                버튼 예시
              </CustomText>
            </Btn>

            <Btn
              type="type2"
              custombackGround="#fff"
              customColor="#000"
            >
              <CustomText customColor="#333" customFontSize="14px" customBold={700}>
                버튼 예시
              </CustomText>
            </Btn>
          </Row>

          <TextInput
            placeHolder="텍스트 Input 예시"
            text={value}
            setText={setValue}
            password={false}
            type="type2"
            height="40px"
          />

          <Text>Input 저장값</Text>
          <Text>{value}</Text>

          <Card
            entity="match"
            background={["#FF00D2", "#FF2000"]}
            title="우리동네FC : 풋러브UTD"
            date="12월 10일 일요일"
            type="오늘의 매치"
            location="장소: 수원 종합 운동장 보조구장"
            time="21:30"
            league = ""
            team = ""
          />

          <Card
            entity="match"
            background={["#000000", "#000000"]}
            title="우리동네FC : 제인 로버스"
            date="12월 10일 일요일"
            type="매치까지 15일 남았어요"
            location="장소: 수원 종합 운동장 보조구장"
            time="20:00"
            league = ""
            team = ""
          />

          <Card
            entity="match"
            background={["#767676", "#767676"]}
            title="우리동네FC : 풋러브UTD"
            date="12월 10일 일요일"
            type="매치까지 9일 남았어요"
            location="장소: 수원 종합 운동장 보조구장"
            time="21:30"
            league = ""
            team = ""
          />

          <Card
            entity="team"
            background={["#fff", "#fff"]}
            title="우리동네FC"
            league="수원 아마추어 풋살 리그A"
            type=""
            team="멤버수: 21명 / 창단년도: 2023 / 연고지: 수원"
            pageMain={true}
            date = ""
            location=""
            time=""
          />

          <Card
            entity="team"
            background={["#000000", "#000000"]}
            title="우리동네FC"
            league="수원 아마추어 풋살 리그A"
            type=""
            team="멤버수: 21명 / 창단년도: 2023 / 연고지: 수원"
            date = ""
            location=""
            time=""
          />

          <Card
            entity="team"
            background={["#E8E8E8", "#E8E8E8"]}
            title="우리동네FC"
            league="수원 아마추어 풋살 리그A"
            type="팀 가입 승인중"
            team="멤버수: 21명 / 창단년도: 2023 / 연고지: 수원"
            date = ""
            location=""
            time=""
          />
        </Container>

        <DefaultModal code="TeamCode" />

        <Btn
           type="type2"
            custombackGround="#333"
            customColor="#333"
            onPress={() =>
              // setSettingPage({
              //   path: "/test2",
              //   path2: ""
              // })
              navigation.navigate('Test2')
            }
          >
            <CustomText customColor="#fff" customFontSize="14px" customBold={700}>
              Test2 페이지 전환
            </CustomText>
          </Btn>
      </MainConLayOut>
    </Scroll>
  );
}

const TextTest = styled.Text`
  /* Add your styles here if any */
`;

const Container = styled.View`
  width: 85%;
  display: flex;
  gap: 10px;
`;

export default Test1;
