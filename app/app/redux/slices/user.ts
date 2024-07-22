import {createSlice} from '@reduxjs/toolkit';

//사용자 상태 관리
const initialState = {
  user : {
    "memberId": 0,
    "name": "",
    "email": "",
    "birthDate": "",
    "createdDate": "",
    "updatedDate": "",
    "sns": {
      "snsId": 0,
      "uuid": "",
      "type": "",
      "createdDate": "",
      "updatedDate": ""
    }
  }
};
const userSlice = createSlice({
  name: 'user', // 상태관리 이름
  initialState, //초기 값
  reducers: {
    //상태를 변환해주는 함수
    setUser(state, action) {
      state.user = action.payload;
    },

  },
});

export default userSlice;

