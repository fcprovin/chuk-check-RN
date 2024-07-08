import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/reducers';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../redux/store';
import userSlice from '../redux/slices/user';


interface ISave {
    data?: any; //로컬에 저장할 데이터
    type: string; //구분을 위한 명칭 
}

export const useLocalSave = () => {
    const dispatch = useAppDispatch();

    const saveLocalData = async(props: ISave) => {
        const { data, type } = props;

        await AsyncStorage.setItem(type, JSON.stringify(data));

            
        
    };

    const getLocalData = async(props:ISave) => {
        const { type } = props;
        let getData = "" as string

        getData = await AsyncStorage.getItem(type) as string

        if( getData !== ""){
            const result = JSON.parse(getData)

            switch(type){
                case "user":
                    dispatch(userSlice.actions.setUser(result))
                    break;
            }
        }

    }

    return {saveLocalData, getLocalData};
};