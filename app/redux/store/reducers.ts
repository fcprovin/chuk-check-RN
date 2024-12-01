import {combineReducers} from 'redux';
import userSlice from '../slices/user';
import pageSlice from '../slices/page';
import settingSlice from '../slices/setting';

//reducer 상태관리
//현재 상태와 액션 객체를 받아와 새로운 상태로 변환해주는 역할

const rootReducer = combineReducers({
    user: userSlice.reducer,
    page: pageSlice.reducer,
    setting: settingSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;