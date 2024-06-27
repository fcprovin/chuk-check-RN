import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polygon, Polyline, Rect, Svg } from "react-native-svg"
import { RootState } from "@/app/redux/store/reducers"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


export const VideoIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/video"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View>
            <Svg width={width} height={height} viewBox="0 0 130 90">
                <G id="main_icon_vide" transform="translate(5739.158 -4859.834)">
                    <Path id="사각형_1336" fill="none" d="M0 0H130V90H0z" transform="translate(-5739.158 4859.834)"/>
                    <G id="그룹_1090">
                        <Path fill={visit} id="패스_310" d="M-5658.019 4879.234h-46.881c-5.111 0-9.253 3.582-9.253 8v35.2c0 4.419 4.142 8 9.253 8h46.886c5.11 0 9.254-3.581 9.254-8v-35.2c-.005-4.418-4.148-8-9.259-8zm4.627 43.2c0 2.206-2.075 4-4.627 4h-46.881c-2.551 0-4.627-1.794-4.627-4v-35.2c0-2.205 2.076-4 4.627-4h46.886c2.552 0 4.627 1.795 4.627 4z"/>
                        <Path fill={visit} id="패스_311" d="M-5636.293 4883.833a2.131 2.131 0 0 0-.993.248l-16.072 9.531v22.444l16.072 9.531a2.119 2.119 0 0 0 .992.249 2.137 2.137 0 0 0 2.136-2.136v-37.731a2.136 2.136 0 0 0-2.135-2.136zm-1.865 36.586l-11.2-6.641v-17.887l11.2-6.642z" />
                        <Path fill={visit} id="패스_312" d="M-5674.675 4903.448l-13.949-7.971a1.6 1.6 0 0 0-2.389 1.386v15.942a1.6 1.6 0 0 0 2.389 1.386l13.949-7.97a1.6 1.6 0 0 0 0-2.773z" transform="translate(2)"/>
                    </G>
                </G>
            </Svg>
        </View>)
}

