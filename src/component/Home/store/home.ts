import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAnn,
  getExamPro,
  getOverData,
  getOverInterview,
  getPeoTab,
  getSignData,
} from "../service/home";

interface userData {
  assessGroup?: number;

  contentUrl?: string;
  creatorUsername?: string;

  endTime?: string;
  id?: string;

  name?: string;
  startTime?: string;
}

type homeDataType = {
  reg: number;
  sign: number;
  interview: number;
  firstExam: number;
  secExam: number;
  people: [];
  annInHome: [];
  userAllData: userData[];
};

const initialState: homeDataType = {
  reg: -1,
  sign: -1,
  interview: -1,
  firstExam: -1,
  secExam: -1,
  people: [],
  annInHome: [],
  userAllData: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setReg(state, action) {
      state.reg = action.payload;
    },
    setSign(state, action) {
      state.sign = action.payload;
    },
    setInter(state, action) {
      state.interview = action.payload;
    },
    setFirstExam(state, action) {
      state.firstExam = action.payload;
    },
    setSecExam(state, action) {
      state.secExam = action.payload;
    },
    setUserAllData(state, action) {
      state.userAllData = action.payload;
    },
    setPeoTab(state, action) {
      state.people = action.payload;
    },
    setAnnInHome(state, action) {
      state.annInHome = action.payload;
    },
  },
});

let setReg = homeSlice.actions.setReg;
let setSign = homeSlice.actions.setSign;
let setInter = homeSlice.actions.setInter;
let setFirstExam = homeSlice.actions.setFirstExam;
let setSecExam = homeSlice.actions.setSecExam;
let setUserAllData = homeSlice.actions.setUserAllData;
let setPeoTab = homeSlice.actions.setPeoTab;
let setAnnInHome = homeSlice.actions.setAnnInHome;

export const fetchHomeDataAction = createAsyncThunk(
  "home",
  async (data: any, { dispatch }) => {
    const reg = await getOverData();
    const sign = await getSignData();
    let userAll = await getExamPro(data);
    userAll = userAll.data;
    let inter = await getOverInterview(userAll[0].id);
    let first = await getOverInterview(userAll[1].id);
    let sec = await getOverInterview(userAll[2].id);
    let peo = await getPeoTab();
    let anns = await getAnn();

    if (reg || sign) {
      dispatch(setReg(reg.data));
      dispatch(setSign(sign.data));
      dispatch(setInter(inter.data));
      dispatch(setFirstExam(first.data));
      dispatch(setSecExam(sec.data));
      dispatch(setPeoTab(peo.data.records));
      dispatch(setAnnInHome(anns.data.records));
    }
  }
);

// 下拉框数据的更改
export const fetchDropDataAction = createAsyncThunk(
  "home",
  async (data: any, { dispatch }) => {
    const userAll = await getExamPro(data);

    if (userAll) {
      dispatch(setUserAllData(userAll.data));
    }
  }
);

let homeReducer = homeSlice.reducer;
export default homeReducer;
