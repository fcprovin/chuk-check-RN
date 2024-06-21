import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../styles/type"
import { Circle, Defs, G, Path, Polygon, Polyline, Rect, Svg } from "react-native-svg"


export const VideoIcon = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <Polygon points="23 7 16 12 23 17 23 7">
                </Polygon>
                <Rect x="1" y="5" width="15" height="14" rx="2" ry="2"></Rect>
            </Svg>
        </ElectronHeaderBtn>)
}

