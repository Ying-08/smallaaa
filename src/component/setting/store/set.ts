import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUrl } from "../ShowSet/service/showSet";
import { getIntro } from "../service/set";
import { getAnnTab } from "../AnnSet/service/annSet";

const initialState: any = {
  mainIntro: [],
  annInSet: [],
  swipers: [],
  groupIntro: [],
};

const setSlice = createSlice({
  name: "setSlice",
  initialState,
  reducers: {
    setSwiperData(state, action) {
      state.swipers = action.payload;
    },
    setMainIntro(state, action) {
      state.mainIntro = action.payload;
    },
    setGroupIntro(state, action) {
      state.groupIntro = action.payload;
    },
    setAnnSet(state, action) {
      state.annInSet = action.payload;
    },
  },
});

let setReducer = setSlice.reducer;

let setSwiperData = setSlice.actions.setSwiperData;
let setMainIntro = setSlice.actions.setMainIntro;
let setGroupIntro = setSlice.actions.setGroupIntro;
let setAnnSet = setSlice.actions.setAnnSet;

export const fetchSetDataAction = createAsyncThunk(
  "setSlice",
  async (id: number, { dispatch }) => {
    let groupIntro = await getIntro(id);
    let anns = await getAnnTab(1, 5);

    let swipers = await getUrl(true);
    console.log("获取的结果", groupIntro);
    let tempSUrl: any = [];
    let tempMainIntro: any = [];
    swipers.data.map((item: any, index: number) => {
      if (item.title == null && item.content == null) {
        console.log("这是轮播图数==========");
        tempSUrl.push(item.url);
      } else {
        tempMainIntro.push(item);
      }
    });

    dispatch(setSwiperData(tempSUrl));
    dispatch(setMainIntro(tempMainIntro));
    dispatch(setGroupIntro(groupIntro.data));
    dispatch(setAnnSet(anns.data.records));
  }
);

export default setReducer;
