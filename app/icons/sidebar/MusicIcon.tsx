import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../styles/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"


export const MusicIcon = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <Path d="M9 18V5l12-2v13"></Path>
                <Circle cx="6" cy="18" r="3"></Circle><Circle cx="18" cy="16" r="3"></Circle>
            </Svg>
        </ElectronHeaderBtn>)
}

