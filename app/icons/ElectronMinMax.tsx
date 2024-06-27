import { View } from "react-native"
import { ElectronHeaderBtn } from "../styles/GlobalStyle"
import { Size } from "../types/type"
import { Defs, G, Path, Rect, Svg } from "react-native-svg"

export const ElectronMinMax = ({width}:Size) => {
 
    return(
        <ElectronHeaderBtn size={width}>
            <Svg viewBox="0 0 512 510" width={width} height={width}>
                <Path d="M464 48v416h-416v-416H464zM512 0H0v512h512V0z" fill="#fff"/>
            </Svg>
        </ElectronHeaderBtn>)
}
