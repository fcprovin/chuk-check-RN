import React from 'react';
import {
    HomeIcon,
    MusicIcon,
    VideoIcon,
    CdIcon,
    RadioIcon,
    TidalIcon,
    BugsIcon,
    QobuzIcon,
    RoseTubeIcon,
    SettingIcon,
    AppleMusicIcon
} from "../icons/sidebar/IndexSidebarIcon"
import { ElectronClose, ElectronMinMax, ElectronMini, ElectronMiniMize } from '../icons/indexIcon';


export const SIDBARMENU = [
    { "name" : "HOME", "path" : "/home", "icon": <HomeIcon width='34' height='24'/>}, // /Home
    { "name" : "MUSIC" , "path" : "/music", "icon": <MusicIcon width='34' height='24'/>},    // /music
    { "name" : "VIDEO" , "path" : "/video", "icon": <VideoIcon width='34' height='24'/>},
    { "name" : "CD" , "path" : "/cd", "icon": <CdIcon width='34' height='24'/>},
    // { "name" : "ROSE RADIO" , "path" : "/roseRadio", "icon": <RadioIcon width='34' height='24'/>},
    { "name" : "RADIO", "path" : "/radio", "icon": <RadioIcon width='34' height='24'/>},
    { "name" : "TIDAL", "path" : "/tidal", "icon": <TidalIcon width='34' height='24'/>},
    { "name" : "BUGS", "path" : "/bugs", "icon": <BugsIcon width='34' height='24'/>},
    { "name" : "QOBUZ", "path" : "/qobuz", "icon": <QobuzIcon width='34' height='24'/>},
    { "name" : "APPLE MUSIC", "path" : "/appleMusic", "icon": <AppleMusicIcon width='34' height='24'/>},
    { "name" : "ROSE TUBE", "path" : "/roseTube", "icon": <RoseTubeIcon width='34' height='24'/>},
    { "name" : "SETTING", "path" : "/setting", "icon": <SettingIcon width='34' height='24'/>}
]

export const ELECTRONHEADERBTN = [
    { "cover" : true, "name" : "minimize", "icon": <ElectronMini width='12px'/>, "hoverColor" : "rgba(159,159,159,0.8)" },
    { "cover" : false, "name" : "maximize", "icon" : <ElectronMiniMize width='12px' />, "hoverColor" : "rgba(159,159,159,0.8)" },
    { "cover" : true, "name" : "maximize", "icon" : <ElectronMinMax width='12px' />, "hoverColor" : "rgba(159,159,159,0.8)" },
    { "cover" : true, "name" : "close", "icon" : <ElectronClose width='12px' />, "hoverColor" : "rgba(255,44,44,0.8)" },
]

export const TIDALURI = "https://login.tidal.com/authorize?client_id=nsxTmgMXYOC9T6Vp&restrictSignup%2B=%20true&lang=en&response_type=code&geo=KR&campaignId=default&restrictSignup=true&code_challenge=YY1mOvDx7IiloZ3vplovgNBlgqgyUQsS9HXYCHC9s6s&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fbeta.roseaudio.kr%2Fservice%2Fapplication%2Fcallback"