import Svg, { Defs, Mask, Rect, Path, Stop, LinearGradient } from 'react-native-svg';

export const InsetShadow = ({ width, height, borderRadius } : any) => {
    return (
        <Svg width={width} height={height} style={{ position: 'absolute' }}>
            <Defs>
                <Mask id="mask" x="0" y="0" width="100%" height="100%">
                    <Rect width="100%" height="100%" rx={borderRadius} ry={borderRadius} fill="white" />
                    <Path
                        d={`M${borderRadius} ${borderRadius} h${width - 2 * borderRadius} a${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} ${borderRadius} v${height - 2 * borderRadius} a${borderRadius} ${borderRadius} 0 0 1 -${borderRadius} ${borderRadius} h-${width - 2 * borderRadius} a${borderRadius} ${borderRadius} 0 0 1 -${borderRadius} -${borderRadius} v-${height - 2 * borderRadius} a${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} -${borderRadius} z`}
                        fill="black"
                    />
                </Mask>
                <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <Stop offset="0" stopColor="black" stopOpacity="0.25" />
                    <Stop offset="1" stopColor="black" stopOpacity="0" />
                </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)" />
        </Svg>
    );
};