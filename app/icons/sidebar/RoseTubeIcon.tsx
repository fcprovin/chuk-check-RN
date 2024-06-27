import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/reducers"
import { useEffect, useState } from "react"


export const RoseTubeIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/roseTube"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View >
            <Svg  width={width} height={height} viewBox="0 0 130 90">
                <G>
                    <Path fill="none" d="M0 0H130V90H0z" transform="translate(5478.842 -4860.166) translate(-5478.842 4860.166)"/>
                    <Path fill={visit} stroke="rgba(0,0,0,0)" d="M3612.241 6068.075a10.726 10.726 0 0 1-10.715-10.715v-32.142a10.726 10.726 0 0 1 10.715-10.715h53.571a10.726 10.726 0 0 1 10.713 10.715v32.142a10.726 10.726 0 0 1-10.713 10.715zm-7.144-42.857v32.142a7.151 7.151 0 0 0 7.144 7.144h53.571a7.151 7.151 0 0 0 7.142-7.144v-32.142a7.152 7.152 0 0 0-7.142-7.144h-53.571a7.152 7.152 0 0 0-7.141 7.144zm25.944 24.492v-16.843a1.688 1.688 0 0 1 2.525-1.464l14.737 8.42a1.688 1.688 0 0 1 0 2.93l-14.737 8.422a1.685 1.685 0 0 1-2.525-1.465z" transform="translate(5478.842 -4860.166) translate(-9052.867 -1136.123)"/>
                </G>
            </Svg>
        </View>)
}

