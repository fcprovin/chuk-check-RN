import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  page : {
    current:{
      "path" : "/test1",
      "type" : "",
      "param1": "",
      "param2": "",
      "param3": "",
      "point" : 0
    },
    history:{
      "path" : [] as string[],
      "type" : [] as string[], //artist, album, playlist, music
      "param1": [] as string[],
      "param2": [] as string[],
      "param3": [] as string[]
    }
  },


};
const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage(state, action){
      state.page.current.path = action.payload.path;
      state.page.current.type = action.payload.type;
      state.page.current.param1 = action.payload.param1;
      state.page.current.param2 = action.payload.param2;
      state.page.current.param3 = action.payload.param3;
      state.page.current.point = action.payload.point;
    },
    setPageHistory(state, action) {
      state.page.history.path = action.payload.path;
      state.page.history.type = action.payload.type;
      state.page.history.param1 = action.payload.param1;
      state.page.history.param2 = action.payload.param2;
      state.page.history.param3 = action.payload.param3;
    },
    setPageCurrent(state, action){
      state.page.current.point = action.payload.point
    }
  },
});

export default pageSlice;
