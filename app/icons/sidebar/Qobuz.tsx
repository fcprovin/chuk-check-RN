import { View } from "react-native"
import { ElectronHeaderBtn } from "../../styles/GlobalStyle"
import { Size } from "../../types/type"
import { Circle, Defs, G, Path, Polyline, Rect, Stop, Svg } from "react-native-svg"
import { RootState } from "@/app/redux/store/reducers"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


export const QobuzIcon = ({width, height}:Size) => {
    const getPage = useSelector((state:RootState) => state.page);
    const [visit, setVisit] = useState("#666")
    
    useEffect(() => {
        if(getPage.page.current.path === "/qobuz"){
            setVisit("#fff")
        }else{
            setVisit("#666")
        }
    },[getPage])

    return(
        <View>
            <Svg width={width} height={height} viewBox="0 0 130 90">
                <Defs>
                    {/* <linearGradient id="linear-gradient" x1=".832" x2=".329" y1="-.471" y2=".735" gradientUnits="objectBoundingBox">
                        <stop offset="0"/>
                        <stop offset=".218" stop-color="#4a4a4a"/>
                        <stop offset=".333" stop-color="#525252"/>
                        <stop offset=".585" stop-color="#616161"/>
                        <stop offset=".801" stop-color="#666"/>
                        <stop offset="1" stop-color="#666"/>
                    </linearGradient> */}
                    {/* <clipPath id="clip-Path">
                        <Path id="패스_4542" d="M-363.416 150.492a23.587 23.587 0 0 0-1.711-8.808 23.47 23.47 0 0 0-12.65-12.922 23.458 23.458 0 0 0-9.258-1.9 23.609 23.609 0 0 0-21.741 14.359 23.571 23.571 0 0 0-1.9 9.273z" fill="none"/>
                    </clipPath> */}
                </Defs>
                <G id="main_icon_qobuz" transform="translate(5089 -4860.166)">
                    <Path id="사각형_1328" d="M0 0H130V90H0z" fill="none" transform="translate(-5089 4860.166)"/>
                    <G id="그룹_5970" transform="translate(-4637.281 4754.32)">
                        <G id="그룹_5969">
                            <Path id="패스_4540" d="M-353.093 177.008l-6.048-6.049c.459-.625.893-1.26 1.3-1.9a34.681 34.681 0 0 0-10.676-47.81 34.545 34.545 0 0 0-18.545-5.4 34.505 34.505 0 0 0-29.273 16.077 34.7 34.7 0 0 0 10.674 47.815 34.549 34.549 0 0 0 18.543 5.4 34.815 34.815 0 0 0 20.211-6.473l6.077 6.078 1.374 1.376 1.375-1.375 4.988-4.986 1.375-1.375z"/>
                            <G id="그룹_5961">
                                <Path id="패스_4541" fill={visit} d="M-387.079 182.417a31.831 31.831 0 0 1-17.086-4.976A31.973 31.973 0 0 1-414 133.38a31.8 31.8 0 0 1 26.981-14.815 31.83 31.83 0 0 1 17.083 4.979 31.723 31.723 0 0 1 14.036 19.993 31.7 31.7 0 0 1-4.2 24.064 31.8 31.8 0 0 1-26.979 14.816zm.057-57.728a25.707 25.707 0 0 0-21.807 11.974 25.841 25.841 0 0 0 7.951 35.61 25.707 25.707 0 0 0 13.8 4.022 25.713 25.713 0 0 0 21.812-11.976 25.613 25.613 0 0 0 3.4-19.446 25.636 25.636 0 0 0-11.348-16.159 25.715 25.715 0 0 0-13.808-4.025z"/>
                            </G>
                            <G id="그룹_5965">
                                <G id="그룹_5964" clipPath="url(#clip-Path)">
                                    <G id="그룹_5963">
                                        <G id="그룹_5962">
                                            <Path id="선_398" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.84px" d="M0 20.986L20.535 0" transform="translate(-387.035 130.047)"/>
                                        </G>
                                    </G>
                                </G>
                            </G>
                            <G id="그룹_5967">
                                <Path id="패스_4543" d="M-382.542 139.937a11.472 11.472 0 0 1 6.05 15.057 11.47 11.47 0 0 1-15.059 6.048 11.466 11.466 0 0 1-6.049-15.057 11.475 11.475 0 0 1 15.058-6.048" fill={visit}/>
                                <Path id="패스_4544" d="M-386.123 148.326a2.358 2.358 0 0 1 1.243 3.093 2.357 2.357 0 0 1-3.093 1.236 2.349 2.349 0 0 1-1.239-3.089 2.352 2.352 0 0 1 3.089-1.24"/>
                                <G id="그룹_5966">
                                    <Path id="패스_4545" d="M-387.052 162.632a12.049 12.049 0 0 1-4.763-.978 12.153 12.153 0 0 1-6.4-15.928 12.13 12.13 0 0 1 11.171-7.377 12.056 12.056 0 0 1 4.76.978 12.057 12.057 0 0 1 6.5 6.638 12.052 12.052 0 0 1-.1 9.29 12.127 12.127 0 0 1-11.168 7.377zm.006-22.1a9.949 9.949 0 0 0-9.163 6.051 9.966 9.966 0 0 0 5.251 13.063 9.9 9.9 0 0 0 3.906.8 9.95 9.95 0 0 0 9.16-6.053 9.888 9.888 0 0 0 .08-7.618 9.894 9.894 0 0 0-5.33-5.445 9.9 9.9 0 0 0-3.904-.798z"/>
                                </G>
                            </G>
                            <G id="그룹_5968">
                                <Path id="패스_4546" fill="url(#linear-gradient)" d="M-387.073 176.295a25.706 25.706 0 0 1-13.8-4.022 25.72 25.72 0 0 1-2.848-2.1l-4.348 4.348a32.145 32.145 0 0 0 3.909 2.922 31.83 31.83 0 0 0 17.085 4.976 31.814 31.814 0 0 0 20.606-7.509l-4.348-4.348a25.728 25.728 0 0 1-16.256 5.733z"/>
                            </G>
                            <Path id="패스_4547" d="M-372.943 160.979a2.751 2.751 0 0 0-1.951-.807 2.748 2.748 0 0 0-1.949.807 2.759 2.759 0 0 0 0 3.9l17.391 17.39 3.9-3.9z" fill={'#666'}/>
                        </G>
                    </G>
                </G>
            </Svg>


        </View>)
}

