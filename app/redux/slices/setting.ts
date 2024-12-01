import {createSlice} from '@reduxjs/toolkit';

interface Itype{
  modal:{
    default : string
  }
}

const initialState:Itype = {
  modal : {
    default : ""
  }
};
const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setDefaultModal(state, action) {
      state.modal.default = action.payload;
    },

  },
});

export default settingSlice;

