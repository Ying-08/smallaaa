import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPeoData } from "../service/peoMan";

const initialState: any = {
  data: {},
};

const peoManSlice = createSlice({
  name: "peoMan",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

let peoReducer = peoManSlice.reducer;
let setData = peoManSlice.actions.setData;

type pageData = {
  page: number;
  pageSize: number;
  name?: string;
  college?: string;
  major?: string;
  groupOption?: string;
};

export const fetchPeoDataAction = createAsyncThunk(
  "peoMan",
  async (data: pageData, { dispatch }) => {
    let res = await getPeoData(
      data.page,
      data.pageSize,
      data.name,
      data.college,
      data.major,
      data.groupOption
    );
    if (res) {
      console.log("人员管理页面的数据", res);
      dispatch(setData(res.data));
    }
  }
);

export default peoReducer;
