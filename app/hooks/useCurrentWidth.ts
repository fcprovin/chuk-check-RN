import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";
import { Dimensions } from 'react-native';

export const useCurrentWidth = () => {
    const [currentWidth, setCurrentWidh] = useState(1024);
    const [contentWidth, setContentWidth] = useState(0);

    const Platform = useSelector((state:RootState) => state.setting);

    
    const handleResize = () => {
        setCurrentWidh(window.innerWidth);
    };
    
    useEffect(() => {
        if(Platform.os === 'web' || Platform.os === 'electron'){

            setCurrentWidh(window.innerWidth);
            window.addEventListener("resize", handleResize);

            return () => {
                // cleanup
                window.removeEventListener("resize", handleResize);
            };
        }else{
            setContentWidth(Math.floor(Dimensions.get('window').width));
        }
    }, [Platform]);
    

    
    useEffect(() => {
        if(Platform.os === 'web' || Platform.os === 'electron'){
            if(Platform.hide){
                //사이드바가 작아졌을때 content width 값
                setContentWidth(currentWidth - 80)
            }else{
                //사이드바 정상일때 content width 값 ( default sidbar width : 260px )
                setContentWidth(currentWidth - 260)
            }
        }
    },[currentWidth, Platform.hide])


    return { contentWidth }
}