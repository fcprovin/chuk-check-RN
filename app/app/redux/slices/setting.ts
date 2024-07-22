import {createSlice} from '@reduxjs/toolkit';

interface Itype{
  modal:{
    default : boolean
  }
}

const initialState:Itype = {
  modal : {
    default : false
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

