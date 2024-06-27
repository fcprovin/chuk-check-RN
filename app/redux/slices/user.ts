import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  rose : null,
  tidal: null
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRose(state, action) {
      state.rose = action.payload;
    },
    setTidal(state, action) {
      state.tidal = action.payload;
    },
  },
});

export default userSlice;