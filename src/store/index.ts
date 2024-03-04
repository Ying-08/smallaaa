import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// 注册
import homeReducer from "../component/Home/store/home";
import userReducers from "../component/Login/store/login";
import peoReducer from "../component/PeoMan/store/peoMan";
import peoDetReducer from "../component/PeoMan/peoDetail/store/peoDetail";
import accountsReducer from "../component/accounts/store/accounts";
import annSetReducer from "../component/setting/AnnSet/store";
import annEditReducer from "../component/setting/AnnSet/AnnEdit/store/annEdit";
import picReducer from "../component/setting/ShowSet/store/showSet";
import setReducer from "../component/setting/store/set";
import examManReducer from "../component/ExamMan/store/examMan";
import editGroupReducer from "../component/setting/EditGroupIntro/store/editGroup";

const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducers,
    peoMan: peoReducer,
    peoDetail: peoDetReducer,
    accounts: accountsReducer,
    annSet: annSetReducer,
    annEdit: annEditReducer,
    picSlice: picReducer,
    setSlice: setReducer,
    examManSlice: examManReducer,
    editGroupSlice:editGroupReducer
  },
});

// 自动推导selector的类型
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
export const useAppSeletor: TypedUseSelectorHook<IRootState> = useSelector;

// dispatch
type DispatchType = typeof store.dispatch;
export const useAppDispatch: () => DispatchType = useDispatch;
export default store;
