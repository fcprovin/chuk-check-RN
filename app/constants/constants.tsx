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
    SettingIcon
} from "../icons/sidebar/IndexSidebarIcon"
import { ElectronClose, ElectronMinMax, ElectronMini, ElectronMiniMize } from '../icons/indexIcon';


export const SIDBARMENU = [
    { "name" : "HOME", "path" : "/test1", "icon": <HomeIcon size='18' />}, // /Home
    { "name" : "MUSIC" , "path" : "/test2", "icon": <MusicIcon size='18' />},    // /music
    { "name" : "VIDEO" , "path" : "/video", "icon": <VideoIcon size='18' />},
    { "name" : "CD" , "path" : "/cd", "icon": <CdIcon size='18' />},
    { "name" : "ROSE RADIO" , "path" : "/roseRadio", "icon": <RadioIcon size='18' />},
    { "name" : "RADIO", "path" : "/radio", "icon": <RadioIcon size='18' />},
    { "name" : "TIDAL", "path" : "/tidal", "icon": <TidalIcon size='18' />},
    { "name" : "BUGS", "path" : "/bugs", "icon": <BugsIcon size='18' />},
    { "name" : "QOBUZ", "path" : "/qobuz", "icon": <QobuzIcon size='18' />},
    { "name" : "APPLE MUSIC", "path" : "/appleMusic", "icon": <MusicIcon size='18' />},
    { "name" : "ROSE TUBE", "path" : "/roseTube", "icon": <RoseTubeIcon size='18' />},
    { "name" : "SETTING", "path" : "/setting", "icon": <SettingIcon size='18' />}
]

export const ELECTRONHEADERBTN = [
    { "cover" : true, "name" : "minimize", "icon": <ElectronMini size='12px'/>, "hoverColor" : "rgba(159,159,159,0.8)" },
    { "cover" : false, "name" : "maximize", "icon" : <ElectronMiniMize size='12px' />, "hoverColor" : "rgba(159,159,159,0.8)" },
    { "cover" : true, "name" : "maximize", "icon" : <ElectronMinMax size='12px' />, "hoverColor" : "rgba(159,159,159,0.8)" },
    { "cover" : true, "name" : "close", "icon" : <ElectronClose size='12px' />, "hoverColor" : "rgba(255,44,44,0.8)" },
]