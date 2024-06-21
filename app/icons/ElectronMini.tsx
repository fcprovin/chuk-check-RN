import { View } from "react-native"
import { ElectronHeaderBtn } from "../styles/GlobalStyle"
import { Size } from "../styles/type"
import { Defs, G, Path, Rect, Svg } from "react-native-svg"

export const ElectronMini = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64"width={size} height={size}>
                <Path d="M64,38.55H0V25.45H64Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_" fill="#fff"/>
            </Svg>
        </ElectronHeaderBtn>)
}

