import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"
import { RootState } from "@/app/redux/store/reducers"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


export const RadioIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/radio"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View>
            <Svg width={width} height={height} viewBox="0 0 130 90">
                <G id="main_icon_rad" transform="translate(5609 -4860)">
                    <Path id="사각형_1337" fill="none" d="M0 0H130V90H0z" transform="translate(-5609 4860)"/>
                    <G id="그룹_1093">
                        <Path id="패스_313" fill={visit} d="M-5574.142 4892.019l32.19-16.1a2 2 0 0 0 .9-2.684 2 2 0 0 0-2.684-.894l-36.593 18.3a1.984 1.984 0 0 0-1.053 1.376h-.113v43.846h75v-43.846zm63.642 39.846h-67v-35.846h67z"/>
                        <Circle id="타원_113" cx="11.5" cy="11.5" r="11.5" fill={visit} transform="translate(-5571.654 4902.442)"/>
                        <Path id="패스_314" fill={visit} d="M-5535.615 4906.712h18.461a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-18.461a2 2 0 0 0-2 2 2 2 0 0 0 2 2z" />
                        <Path id="패스_315" fill={visit} d="M-5535.615 4915.942h18.461a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-18.461a2 2 0 0 0-2 2 2 2 0 0 0 2 2z" />
                        <Path id="패스_316" fill={visit} d="M-5535.615 4925.173h18.461a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-18.461a2 2 0 0 0-2 2 2 2 0 0 0 2 2z" />
                    </G>
                </G>
            </Svg>
        </View>)
}

