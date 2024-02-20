import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getpeoDetail } from "../service/peoDetail";

const initialState = {};

const peoDetailSlice = createSlice({
  name: "peoDetail",
  initialState,
  reducers: {
    setName(state, action) {},
  },
});

let setName = peoDetailSlice.actions.setName;

export const fetchPeoDetDataAction = createAsyncThunk(
  "peoDetail",
  async (data: any, { dispatch }) => {}
);

let peoDetReducer = peoDetailSlice.reducer;
export default peoDetReducer;
