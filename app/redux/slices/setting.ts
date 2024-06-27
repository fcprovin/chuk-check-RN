import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  os : '',
  hide: false,
  modal : false
};
const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setDeviceOs(state, action) {
        state.os = action.payload.os;
      },
    setHideSide(state, action){
      state.hide = action.payload.hide
    },
    setRoseModal(state, action){
      state.modal = action.payload
    },
  },
});

export default settingSlice;