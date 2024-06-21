
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Test1 from '../pages/test/Test1';
import Test2 from '../pages/test/Test2';
import { RootState } from '../redux/store/reducers';




const DomPath = [
    {"path": "/test1", "dom": <Test1 />},
    {"path": "/test2", "dom" : <Test2 />}
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