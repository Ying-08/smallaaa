import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editPic, getUrl } from "../service/showSet";

const initialState = {
  data: [],
};

const picSlice = createSlice({
  name: "picSlice",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

let setPicData = picSlice.actions.setData;

export const fetchPicDataAction = createAsyncThunk(
  "picSlice",
  async (data: boolean, { dispatch }) => {
    let res = await getUrl(data);
    if (res.msg === "SUCCESS") {
      dispatch(setPicData(res.data));
    }
  }
);

let picReducer = picSlice.reducer;

export default picReducer;
