import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExamCon, getExamPro } from "../service/examMan";
import {createLogger} from "typescript-plugin-css-modules/dist/helpers/logger";

let initialState = {
  process: [],
  condition: [],
};

const examManSlice = createSlice({
  name: "examManSlice",
  initialState,
  reducers: {
    setProcess(state: any, action) {
      state.process = action.payload;
    },
    setCondition(state: any, action) {
      state.condition = action.payload;
    },
  },
});

let setProcess = examManSlice.actions.setProcess;
let setCondition = examManSlice.actions.setCondition;

type dataType = {
  name: string;
  passRate: string;
  passCount: string;
};

export const fetchExamManDataAction = createAsyncThunk(
  "examManSlice",
  async (_, { dispatch }) => {
    let process = await getExamPro();
    let condition = await getExamCon();

    let data=process.data

    for(let i=0;i<data.length;i++){
        if(data[i].contentUrl){
            data[i].contentUrl=data[i].contentUrl.split(",")
        }else {
            data[i].contentUrl=[]
        }
    }

      console.log("看一下改制后的数组",data)
    dispatch(setProcess(data))

    let arr: dataType[] = [];

    const keys = Object.keys(condition.data["3"]);
    keys.map((item: any, index: number) => {
      arr.push({
        name: item,
        passRate: condition.data["3"][item].passRate,
        passCount: condition.data["3"][item].passCount,
      });
    });

    console.log("arr=============", arr);
    dispatch(setCondition(arr));
  }
);

let examManReducer = examManSlice.reducer;

export default examManReducer;
