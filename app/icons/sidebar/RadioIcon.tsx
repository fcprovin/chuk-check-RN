import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../styles/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"


export const RadioIcon = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Circle cx="12" cy="12" r="2"></Circle>
            <Path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14">
            </Path>
            </Svg>
        </ElectronHeaderBtn>)
}

