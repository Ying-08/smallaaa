import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccounts } from "../service/accounts";

const initialState = {
  records: [],
  total: 0,
};

const accountsSlice = createSlice({
  name: "accountsSlice",
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload;
    },
    setData(state, action) {
      state.records = action.payload;
    },
  },
});

type pageData = {
  page: number;
  pageSize: number;
};

let setTotal = accountsSlice.actions.setTotal;
let setData = accountsSlice.actions.setData;

export const fetchAccDataAction = createAsyncThunk(
  "accountsSlice",
  async function (data: pageData, { dispatch }) {
    let res = await getAccounts(data.page, data.pageSize);
    if (res) {
      console.log("账号管理页面的数据", res.data);
      dispatch(setTotal(res.data.total));
      dispatch(setData(res.data.records));
    }
  }
);

let accountsReducer = accountsSlice.reducer;
export default accountsReducer;
