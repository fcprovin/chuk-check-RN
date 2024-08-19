
import { CustomText } from "@/app/styles/GlobalStyle";
import { Image, Text } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { Theme } from "@/app/types/type";

interface ICard{
    entity: string; // team || match
    background: string[]; // ['#FF00D2', '#FF2000'] || ["#000000"] || ["#E8E8E8",'#E8E8E8'] || ["#767676", "#767676"]
    title: string; // 우리동네 FC || 우리동네FC : 풋러브UTD
    date: string; //12월 10일 일요일
    league: string; // 수원 아마추어 풋살 리그A
    location: string; //장소 : 수원 종합 운동장 보조구장
    time: string; // 킥오프 : 21:30
    team:string; //멤버수: 21명 / 창단년도: 2023 / 연고지: 수원
    type:string; //팀 가입 승인중 || 오늘의 매치 || 매치까지 9일 남았어요.
    pageMain?: boolean;
}


function Card(props:ICard){
    const { entity, background, title, date, league, location, time, team, type, pageMain } = props;

    return(
        <Touch>
            <Layout colors={background} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}>
                <CustomText  customColor={entity === "team" && type !== "" ? "#999999" : "#fff"} customFontSize="12px" customBold={500}>{type}</CustomText>


                <ContentLay>
                    {entity === "team" ? <Image source={require("../../../assets/icons/test.png")}/> : null}
                    <CardContent boolean={entity === "team"}>
                        <Title>
                            {entity === "match" ? <CustomText  customColor="#fff" customFontSize="14px" customBold={700}>{date}</CustomText> : null}
                            <CustomText  customColor={entity === "team" && type !== "" ? "#999999" : pageMain ? "#111" : "#fff"} customFontSize="20px" customBold={700}>{title}</CustomText>
                            {entity === "team" ? <CustomText  customColor={type !== "" ? "#999999" : pageMain ? "#505050" : "#fff"} customFontSize="10px" customBold={500}>{league}</CustomText> : null}
                            {entity === "team" ? <CustomText  customColor={type !== "" ? "#999999" : pageMain ? "#767676" : "#fff"} customFontSize="10px" customBold={500}>{team}</CustomText> : null}
                        </Title>

                        {entity === "match" ?<CustomText  customColor="#fff" customFontSize="12px" customBold={400}>{ location }</CustomText> : null}
                        {entity === "match" ?<CustomText  customColor="#fff" customFontSize="12px" customBold={400}>킥오프: {time}</CustomText> : null}
                    </CardContent>
                </ContentLay>
            </Layout>
        </Touch>
    )
}


export default Card;

const Touch = styled.TouchableOpacity`
    width: 100%;
    height: 150px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`

const Layout = styled(LinearGradient)`
    width: 100%;
    height: 150px;
    background-color: #000000;
    border-radius: 10px;
    display: flex;
    padding: 10px 15px;
    align-items: flex-end;
    justify-content: center;
`
const Title = styled.View`
    margin-bottom: 10px;
    display: flex;
    gap: 5px;
`

const ContentLay = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 15px;
`
const CardContent = styled.View<Theme>`
    width: ${(props) => props.boolean ? "80%" : "100%"};
    display: flex;
    align-items: flex-start;
    gap: 3px;
`
