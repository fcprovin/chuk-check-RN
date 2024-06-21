import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../styles/type"
import { Circle, Defs, G, Path, Rect, Svg } from "react-native-svg"


export const CdIcon = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg  width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <Circle cx="12" cy="12" r="10"></Circle>
                <Circle cx="12" cy="12" r="3"></Circle>
            </Svg>
        </ElectronHeaderBtn>)
}

