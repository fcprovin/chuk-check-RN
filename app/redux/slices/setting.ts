import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  os : ''
};
const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setDeviceOs(state, action) {
        state.os = action.payload.os;
      },
  },
});

export default settingSlice;