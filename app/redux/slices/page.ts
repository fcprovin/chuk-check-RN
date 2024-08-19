import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: {
    current: {
      path: "/splash",
      path2: "",
      team: "",
      param1: "",
      param2: "",
      param3: "",
      param4: "",
      point: 0
    },
    history: {
      path: [] as string[],
      path2: [] as string[],
      team: [] as string[], 
      param1: [] as string[],
      param2: [] as string[],
      param3: [] as string[],
      param4: ""
    }
  }
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page.current.path = action.payload.path || state.page.current.path;
      state.page.current.path2 = action.payload.path2 || state.page.current.path2;
      state.page.current.team = action.payload.team || state.page.current.team;
      state.page.current.param1 = action.payload.param1 || state.page.current.param1;
      state.page.current.param2 = action.payload.param2 || state.page.current.param2;
      state.page.current.param3 = action.payload.param3 || state.page.current.param3;
      state.page.current.param4 = action.payload.param4 || state.page.current.param4;
      state.page.current.point = action.payload.point ?? state.page.current.point;
    },
    setPageHistory(state, action) {
      state.page.history.path = action.payload.path || state.page.history.path;
      state.page.history.path2 = action.payload.path2 || state.page.history.path2;
      state.page.history.team = action.payload.team || state.page.history.team;
      state.page.history.param1 = action.payload.param1 || state.page.history.param1;
      state.page.history.param2 = action.payload.param2 || state.page.history.param2;
      state.page.history.param3 = action.payload.param3 || state.page.history.param3;
      state.page.history.param4 = action.payload.param4 || state.page.history.param4;
    },
    setPageCurrent(state, action) {
      state.page.current.point = action.payload.point ?? state.page.current.point;
    }
  }
});


export default pageSlice;
