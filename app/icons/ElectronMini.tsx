import { View } from "react-native"
import { ElectronHeaderBtn } from "../styles/GlobalStyle"
import { Size } from "../types/type"
import { Defs, G, Path, Rect, Svg } from "react-native-svg"

export const ElectronMini = ({width}:Size) => {
 
    return(
        <ElectronHeaderBtn size={width}>
            <Svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64"width={width} height={width}>
                <Path d="M64,38.55H0V25.45H64Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_" fill="#fff"/>
            </Svg>
        </ElectronHeaderBtn>)
}

