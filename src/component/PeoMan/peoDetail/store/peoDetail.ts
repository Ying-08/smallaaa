import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getpeoDetail, queryInfo} from "../service/peoDetail";

const initialState = {
  data:[]
};

const peoDetailSlice = createSlice({
  name: "peoDetail",
  initialState,
  reducers: {
    setName(state, action) {
      state.data=action.payload
    },
  },
});

let setName = peoDetailSlice.actions.setName;

export const fetchPeoDetDataAction = createAsyncThunk(
  "peoDetail",
  async (data: any, { dispatch }) => {
   let res=await queryInfo(data)
    console.log('///////////',res.data)
    dispatch(setName(res.data))
  }
);

let peoDetReducer = peoDetailSlice.reducer;
export default peoDetReducer;
