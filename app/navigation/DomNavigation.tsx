
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store/reducers';
import Tidal from '../pages/tidal';
import RoseHome from '../pages/roseHome';
import Music from '../pages/music';
import Video from '../pages/video';
import Cd from '../pages/cd';
import RoseRadio from '../pages/roseRadio';
import Radio from '../pages/radio';
import Bugs from '../pages/bugs';
import Qobuz from '../pages/qobuz';
import AppleMusic from '../pages/appleMusic';
import RoseTube from '../pages/roseTube';
import Setting from '../pages/setting';
// import Test1 from '../pages/test/Test1';
// import Test2 from '../pages/test/Test2';




const DomPath = [
    // {"path": "/test1", "dom": <Test1 />},
    // {"path": "/test2", "dom" : <Test2 />},
    {"path": "/home", "dom" : <RoseHome />},
    {"path": "/music", "dom" : <Music />},
    {"path": "/video", "dom" : <Video />},
    {"path": "/cd", "dom" : <Cd />},
    {"path": "/roseRadio", "dom" : <RoseRadio />},
    {"path": "/radio", "dom" : <Radio />},
    {"path": "/tidal", "dom" : <Tidal />},
    {"path": "/bugs", "dom" : <Bugs />},
    {"path": "/qobuz", "dom" : <Qobuz />},
    {"path": "/appleMusic", "dom" : <AppleMusic />},
    {"path": "/roseTube", "dom" : <RoseTube />},
    {"path": "/setting", "dom" : <Setting />},
]


const DomNavigation = () => {
    const current = useSelector((state:RootState) => state.page)

    try{
        const matchItem = DomPath.find((item) => item.path === current.page.current.path ? item.dom : null)
        
        if(matchItem){
            return matchItem.dom
        }else{
            return  (     
            <View>
                <Text>Not Found</Text>
            </View>)
        }
    }catch{
        <View>
            <Text>에러페이지</Text>
        </View>
    }

}


export default DomNavigation;