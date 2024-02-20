import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAnnDetail } from "../service/annEidt";

const initialState = {
  data: {},
};

const annEditSlice = createSlice({
  name: "annEdit",
  initialState,
  reducers: {
    setAnnEidt(state, action) {
      state.data = action.payload;
    },
  },
});

let setAnnDet = annEditSlice.actions.setAnnEidt;

export const fetchAnnEditDataAction = createAsyncThunk(
  "annEdit",
  async (data: string, { dispatch }) => {
    let res = await getAnnDetail(data);
    console.log("打印一下通知详情的数据", res);
    dispatch(setAnnDet(res.data));
  }
);

let annEditReducer = annEditSlice.reducer;

export default annEditReducer;
