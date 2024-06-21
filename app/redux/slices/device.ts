import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list : {},
  connect: {},
  volume : {
    current: 0,
    volumeStep: 1,
    maxVolume: 100
  },
  playType:{
    REMOTE_PLAY_TYPE_REPLACE : 0x00 + 0x0C,//큐비우고 추가
    REMOTE_PLAY_TYPE_LAST_ADD : 0x00+ 0x0D,//큐 맨마지막 추가
    REMOTE_PLAY_TYPE_DIRECT_ADD : 0x00 + 0x0F,//바로듣기 추가
    REMOTE_PLAY_TYPE_CURRENT_PLAY_NEXT_ADD : 0x00 + 0x10,//현재 재생곡 다음에 추가
    REMOTE_MUSIC_STATE_PLAY_PAUSE_TOGGLE : 0x00 + 0x11,//플레이 -> 멈춤 /// 멈춤 -> 재생
    REMOTE_MUSIC_STATE_NEXT : 0x00 + 0x12,//다음곡 재생
    REMOTE_MUSIC_STATE_PREV : 0x00 + 0x13,//이전곡 재생( 재생중이면 0초로 이동 0초에서 한번더 두르면 이전곡 재생)
    REMOTE_SEEKTO : 22
  }
};
const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDeivceList(state, action) {
      state.list = action.payload;
    },
    setDeviceConnect(state, action) {
      state.connect = action.payload;
    },
    setDeviceVolume(state, action){
        state.volume.current = action.payload
    }
  },
});

export default deviceSlice;