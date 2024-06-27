import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  music : {
    nowPlaying: false, //현재 재생여부
    playEntity: '', //TIDAL, QOBUZ, BUGS, ROSETUBE ...
    img: '',  //표지 이미지
    title: '',  // 제목
    artist: '', //가수
    albumTitle: '' // 앨범 제목
  },


};
const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setDeivceList(state, action) {
      state.music.nowPlaying = action.payload.nowPlaying;
      state.music.playEntity = action.payload.playEntity;
      state.music.img = action.payload.img;
      state.music.title = action.payload.title;
      state.music.artist = action.payload.artist;
      state.music.albumTitle = action.payload.albumTitle;
    },
  },
});

export default musicSlice;