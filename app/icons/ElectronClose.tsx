import { View } from "react-native"
import { ElectronHeaderBtn } from "../styles/GlobalStyle"
import { Size } from "../styles/type"
import { Defs, G, Path, Rect, Svg } from "react-native-svg"


export const ElectronClose = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg viewBox="0 0 32 32" width={size} height={size}>
                <G data-name="Layer 2" id="Layer_2">
                <Path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z" fill="#fff" />
                <Path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z" fill="white" />
                </G>
                <G id="frame">
                    <Rect fill={'none'} height="32" width="32" />
                </G>
            </Svg>
        </ElectronHeaderBtn>)
}

