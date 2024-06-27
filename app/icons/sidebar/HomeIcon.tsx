import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/reducers"
import { useEffect, useState } from "react"


export const HomeIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/home"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View>
            <Svg width={width} height={height} viewBox="0 0 130 90">
                <G>
                    <Path fill="none" d="M0 0H130V90H0z" transform="translate(5999.475 -4859.503) translate(-5999.475 4859.503)"/>
                    <Path fill={visit} d="M-5934.475 4871.613l29.564 27.009h-4.521V4938h-12.675v-27.566h-24.737V4938h-12.674v-39.381h-4.521l29.564-27.009m0-4.61a2.276 2.276 0 0 0-1.537.6l-34 31.063a2.278 2.278 0 0 0 1.537 3.96h4.958v37.1a2.279 2.279 0 0 0 2.278 2.279h16.118a2.279 2.279 0 0 0 2.278-2.279v-25.287h16.737v25.287a2.279 2.279 0 0 0 2.279 2.279h16.118a2.279 2.279 0 0 0 2.278-2.279v-37.1h4.958a2.278 2.278 0 0 0 1.536-3.96l-34-31.063a2.277 2.277 0 0 0-1.537-.6z" transform="translate(5999.475 -4859.503)"/>
                </G>
            </Svg>
        </View>)
}

