import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"
import { useSelector } from "react-redux"
import { RootState } from "@/app/redux/store/reducers"
import { useEffect, useState } from "react"


export const MusicIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/music"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View>
            <Svg width={width} height={height}  viewBox="0 0 130 90">
                <G>
                    <G>
                        <Path fill="none" d="M0 0H130V90H0z" transform="translate(5869.317 -4859.668) translate(-5869.317 4859.668)"/>
                    </G>
                    <Path fill={visit} d="M-5769.3 4867.051l-47.585 12.977v41.221a13.961 13.961 0 0 0-9.226-3.392c-7.293 0-13.226 5.341-13.226 11.906s5.933 11.906 13.226 11.906 13.226-5.341 13.226-11.906c0-.143-.018-.282-.024-.424a1.778 1.778 0 0 0 .024-.236v-46.02l39.585-10.8v33.117a13.968 13.968 0 0 0-9.226-3.391c-7.293 0-13.227 5.341-13.227 11.906s5.934 11.9 13.227 11.9 13.226-5.34 13.226-11.9c0-.143-.018-.282-.024-.424a1.915 1.915 0 0 0 .024-.237zm-56.811 70.618c-5.088 0-9.226-3.547-9.226-7.906s4.138-7.906 9.226-7.906 9.226 3.546 9.226 7.906-4.137 7.906-9.224 7.906zm43.585-15.85c-5.088 0-9.227-3.546-9.227-7.9s4.139-7.906 9.227-7.906 9.226 3.547 9.226 7.906-4.137 7.9-9.224 7.9z" transform="translate(5869.317 -4859.668)"/>
                </G>
            </Svg>

        </View>)
}

