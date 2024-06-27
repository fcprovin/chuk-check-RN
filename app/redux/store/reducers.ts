import {combineReducers} from 'redux';
import userSlice from '../slices/user';
import deviceSlice from '../slices/device';
import musicSlice from '../slices/music';
import pageSlice from '../slices/page';
import settingSlice from '../slices/setting';


const rootReducer = combineReducers({
    user: userSlice.reducer,
    device: deviceSlice.reducer,
    music: musicSlice.reducer,
    page: pageSlice.reducer,
    setting: settingSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;