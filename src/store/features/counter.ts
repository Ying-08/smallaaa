import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    message: "哈哈哈",
  },
  reducers: {
    changeMessage(state,{payload}){
        state.message=payload
    }
  },
});

// 导出reducer
export const {changeMessage} = counterSlice.actions
export default counterSlice.reducer;
