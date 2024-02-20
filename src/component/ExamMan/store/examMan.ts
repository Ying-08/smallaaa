import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExamCon, getExamPro } from "../service/examMan";

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

    dispatch(setProcess(process.data));

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
