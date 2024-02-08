import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 自动推导selector的类型
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
export const useAppSeletor: TypedUseSelectorHook<IRootState> = useSelector;

// dispatch
type DispatchType=typeof store.dispatch
export const useAppDispatch:()=>DispatchType=useDispatch
export default store;
