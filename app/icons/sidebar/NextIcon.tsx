import { View } from "react-native";
import { Svg, G, Path } from "react-native-svg";

export const NextIcon = () => {
    return (
        <View>
            <Svg width="17.5" height="48.5" viewBox="0 0 70 195">
                <G id="menu_next_ico" transform="translate(0, 0)">
                    <Path 
                        id="사각형_100" 
                        d="M0 0h70v195H0z" 
                        fill="none" 
                        data-name="사각형 100" 
                    />
                    <Path 
                        id="패스_30" 
                        d="M28.182 87.5l13.636 13-13.636 13" 
                        stroke="#fff" 
                        strokeWidth={5} 
                        strokeMiterlimit={10} 
                        fill="none"
                        data-name="패스 30" 
                    />
                </G>
            </Svg>
        </View>
    );
}
