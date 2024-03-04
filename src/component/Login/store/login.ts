import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginIn } from "../service/login";
import { FieldType } from "..";
import { jwtDecode } from "jwt-decode";

let iniToken = localStorage.getItem("AnyToken");
let alToken;

if (iniToken) {
  alToken = { ...JSON.parse(iniToken) };
}
const initialState = {
  user: localStorage.getItem("token"),
  anyToken: alToken,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action) {
      state.user = action.payload;
    },
    setAnyToken(state, action) {
      const decoded = jwtDecode(action.payload);
      if (decoded.sub) {
        state.anyToken = JSON.parse(decoded.sub);
      }
    },
  },
});

let setToken = userSlice.actions.setToken;
let setAnyToken = userSlice.actions.setAnyToken;

type dataType = {
  datas: FieldType;
  from: any;
  navigate?: any;
};

export const fetchUserAction = createAsyncThunk(
  "user",
  async (data: dataType, { dispatch }) => {
    console.log("datadata", data.from);
    loginIn(data.datas).then((res) => {

      if (res.data) {
        localStorage.setItem("token", res.data.token);
        dispatch(setToken(res.data.token));
        let sub = jwtDecode(res.data.token).sub;
        if (sub) {
          localStorage.setItem("AnyToken", sub);
        } else {
          localStorage.setItem("AnyToken", "");
        }

        dispatch(setAnyToken(res.data.token));
        if (data.from === "/") {
          data.navigate("/home", { replace: true });
        } else {
          data.navigate(data.from, { replace: true });
        }
      }
    });

    return;
  }
);

let userReducers = userSlice.reducer;

export default userReducers;
