import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";

export const useResizeWindow = () => {
    const [resize, setResize] = useState(false);

    const platform = useSelector((state: RootState) => state.setting);

    const handleResize = () => {
        setResize(e => !e);
    };

    useEffect(() => {
        if (platform.os === 'web' || platform.os === 'electron') {
            window.addEventListener("resize", handleResize);

            // 전체 화면 변경 감지
            const handleFullscreenChange = () => {
                setResize(e => !e);
            };

            document.addEventListener("fullscreenchange", handleFullscreenChange);
            document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
            document.addEventListener("mozfullscreenchange", handleFullscreenChange);
            document.addEventListener("MSFullscreenChange", handleFullscreenChange);

            // Electron의 전체 화면 변경 감지
            if (platform.os === 'electron' && window.require) {
                const { remote } = window.require('electron');
                const currentWindow = remote.getCurrentWindow();

                currentWindow.on('enter-full-screen', handleFullscreenChange);
                currentWindow.on('leave-full-screen', handleFullscreenChange);
            }

            return () => {
                window.removeEventListener("resize", handleResize);
                document.removeEventListener("fullscreenchange", handleFullscreenChange);
                document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
                document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
                document.removeEventListener("MSFullscreenChange", handleFullscreenChange);

                if (platform.os === 'electron' && window.require) {
                    const { remote } = window.require('electron');
                    const currentWindow = remote.getCurrentWindow();

                    currentWindow.removeListener('enter-full-screen', handleFullscreenChange);
                    currentWindow.removeListener('leave-full-screen', handleFullscreenChange);
                }
            };
        }
    }, [platform]);

    return { resize };
};
