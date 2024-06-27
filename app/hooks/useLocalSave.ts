import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/reducers';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../redux/store';
import userSlice from '../redux/slices/user';

interface ISave {
    data?: any;
    type: string;
}

export const useLocalSave = () => {
    const getOs = useSelector((state: RootState) => state.setting.os);
    const dispatch = useAppDispatch();

    const saveLocalData = async(props: ISave) => {
        const { data, type } = props;

        
            switch (getOs) {
                case 'web':
                    localStorage.setItem(type, JSON.stringify(data)); 
                    break;
                case 'electron':
                    window.localStorage.setItem(type, JSON.stringify(data)); 
                    break;
                case 'android':
                case 'ios':
                    await AsyncStorage.setItem(type, JSON.stringify(data));
                    break;
                default:
                    break;
            }
        
    };

    const getLocalData = async(props:ISave) => {
        const { type } = props;
        let getData = "" as string

        switch (getOs) {
            case 'web':
                getData = localStorage.getItem(type) as string

                break;
            case 'electron':
                getData = window.localStorage.getItem(type) as string
                break;
            case 'android':
            case 'ios':
                getData = await AsyncStorage.getItem(type) as string
                break;
            default:
                break;
        }
        
        if( getData !== ""){
            dispatch(userSlice.actions.setRose(JSON.parse(getData)))
        }

    }

    return {saveLocalData, getLocalData};
};