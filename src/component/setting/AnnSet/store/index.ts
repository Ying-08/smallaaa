import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAnnTab } from "../service/annSet";

const initialState: any = {
  anns: [],
};

const annSetSlice = createSlice({
  name: "annSet",
  initialState,
  reducers: {
    setData(state, action) {
      state.anns = action.payload;
    },
  },
});

let setAnnsSetData = annSetSlice.actions.setData;
type pageData = {
  page: number;
  pageSize: number;
};

export const fetchAnnSetDataAction = createAsyncThunk(
  "annSet",
  async (data: pageData, { dispatch }) => {
    let res = await getAnnTab(data.page, data.pageSize);
    dispatch(setAnnsSetData(res.data));
  }
);

let annSetReducer = annSetSlice.reducer;

export default annSetReducer;
