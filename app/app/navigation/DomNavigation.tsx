
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store/reducers';
import Test1 from '../pages/test/Test1';
import Test2 from '../pages/test/Test2';
import Splash from '../pages/splash/Splash';



//Path 및 페이지 정의
//현재 페이지 상태와 동일한 DomPath 항목을 화면에 보여줌
const DomPath = [
    {"path": "/test1", "dom": <Test1 />},
    {"path": "/test2", "dom" : <Test2 />},
    {"path": "/splash", "dom" : <Splash />}
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