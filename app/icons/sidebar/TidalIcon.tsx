import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/reducers"
import { useEffect, useState } from "react"


export const TidalIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/tidal"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View>
            <Svg width={width} height={height} viewBox="0 0 130 90">
                <G>
                    <Path fill="none" d="M0 0H130V90H0z" transform="translate(5219 -4860.166) translate(-5219 4860.166)"/>
                    <Path fill={visit} stroke="rgba(0,0,0,0)" d="M3626.527 6052.006l12.5-12.5 12.5 12.5-12.5 12.5zm25-25l-12.5 12.5-12.5-12.5 12.5-12.5 12.5 12.5 12.5-12.5 12.5 12.5-12.5 12.5zm-50 0l12.5-12.5 12.5 12.5-12.5 12.5z" transform="translate(5219 -4860.166) translate(-8793.027 -1134.339)"/>
                </G>
            </Svg>

        </View>)
}

