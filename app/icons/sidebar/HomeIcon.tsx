import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../styles/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"


export const HomeIcon = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg  width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" ></Path>
            <Polyline points="9 22 9 12 15 12 15 22"></Polyline></Svg>
        </ElectronHeaderBtn>)
}

