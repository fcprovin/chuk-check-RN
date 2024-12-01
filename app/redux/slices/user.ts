import {createSlice} from '@reduxjs/toolkit';

//사용자 상태 관리
const initialState = {
  chukCheckuser : {
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
  },
  googleUser : {
    email : "",
    family_name : "",
    given_name : "",
    id : "",
    name : "",
    picture : "",
    verified_email : true
  }
};
const userSlice = createSlice({
  name: 'user', // 상태관리 이름
  initialState, //초기 값
  reducers: {
    //상태를 변환해주는 함수
    setUser(state, action) {
      state.chukCheckuser = action.payload;
    },
    setGoogleUser(state, action) {
      state.googleUser = action.payload;
    },

  },
});

export default userSlice;

