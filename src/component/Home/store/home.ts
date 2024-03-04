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
  exams:number[],
  people: [];
  annInHome: [];
  userAllData: userData[];
};

const initialState: homeDataType = {
  reg: -1,
  sign: -1,
  exams:[],
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
    setExams(state,action){
      state.exams=action.payload
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
let setUserAllData = homeSlice.actions.setUserAllData;
let setPeoTab = homeSlice.actions.setPeoTab;
let setAnnInHome = homeSlice.actions.setAnnInHome;
let setExams=homeSlice.actions.setExams

export const fetchHomeDataAction = createAsyncThunk(
  "home",
  async (data: any, { dispatch,getState }) => {
    let state:any=getState()
    const reg = await getOverData();
    const sign = await getSignData();
    let userAll = await getExamPro();
    userAll = userAll.data;
    localStorage.setItem("examId",JSON.stringify(userAll))
    dispatch(setUserAllData(userAll))

   const tempArr=await Promise.all(userAll.map(async (item:any,index:number)=> {
      return getOverInterview(item.id)
    }))


    dispatch(setExams(tempArr.map((item:any,index:number)=>{
      return {
        name:userAll[index].name,
        count:item.data
      }
    })))

    // let inter = await getOverInterview(userAll[0].id);
    //
    // let first = await getOverInterview(userAll[1].id);


    let peo = await getPeoTab();
    let anns = await getAnn();



      dispatch(setReg(reg.data));
      dispatch(setSign(sign.data));
      // dispatch(setInter(inter.data));
      // dispatch(setFirstExam(first.data));
      // dispatch(setSecExam(0));
      dispatch(setPeoTab(peo.data.records));
      dispatch(setAnnInHome(anns.data.records));

  }
);

// 下拉框数据的更改
// export const fetchDropDataAction = createAsyncThunk(
//   "home",
//   async (data: any, { dispatch }) => {
//     const userAll = await getExamPro(data);
//
//     if (userAll) {
//       dispatch(setUserAllData(userAll.data));
//     }
//   }
// );

let homeReducer = homeSlice.reducer;
export default homeReducer;
