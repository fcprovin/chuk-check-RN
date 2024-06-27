import React from "react";
import { Svg, Rect, Polyline, G, Defs } from "react-native-svg";
import { ElectronHeaderBtn } from "../styles/GlobalStyle";
import { Size } from "../types/type";

export const ElectronMiniMize = ({ width }: Size) => {
  return (
    <ElectronHeaderBtn size={width}>
      <Svg viewBox="0 0 32 32" width={width} height={width}>
        <Defs>
          <style>
            {`.cls-1 { fill: none; stroke: #fff; strokeLinejoin: round; strokeWidth: 2px; }`}
          </style>
        </Defs>
        <G data-name="39-Minimize" id="_39-Minimize">
          <Rect
            x={9}
            y={1}
            width={22}
            height={22}
            stroke="#fff"
            strokeWidth={2}
            fill="none"
          />
          <Polyline
            points="9 9 1 9 1 31 23 31 23 23"
            stroke="#fff"
            strokeWidth={2}
            fill="none"
          />
        </G>
      </Svg>
    </ElectronHeaderBtn>
  );
};


