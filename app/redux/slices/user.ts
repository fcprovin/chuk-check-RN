import {createSlice} from '@reduxjs/toolkit';

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
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

  },
});

export default userSlice;

