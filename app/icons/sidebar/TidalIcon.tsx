import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../styles/type"
import { Circle, Defs, G, Path, Polyline, Rect, Svg } from "react-native-svg"


export const TidalIcon = ({size}:Size) => {
 
    return(
        <ElectronHeaderBtn size={size}>
            <Svg width={size}height={size} viewBox="0 0 36 70" fill="none" >
            <G filter="url(#filter0_d_1_13874)">
            <Path d="M28.338 31.569L35.07 24.837L41.801 31.569L35.07 38.3L28.338 31.569ZM41.8 18.107L35.07 24.837L28.338 18.106L35.069 11.375L41.799 18.106L48.531 11.375L55.262 18.106L48.531 24.838L41.8 18.107ZM14.875 18.106L21.606 11.375L28.338 18.106L21.607 24.837L14.875 18.106Z" fill="white"/>
            </G>
            <Defs>
            <filter id="filter0_d_1_13874" x="10.875" y="11.375" width="48.3867" height="34.9248" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_13874"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_13874" result="shape"/>
            </filter>
            </Defs>
            </Svg>
        </ElectronHeaderBtn>)
}

