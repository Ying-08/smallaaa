import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getIntro} from "../service/editGroup";

const initialState = {
    data:{}
};

const editGroupSlice = createSlice({
    name: "editGroup",
    initialState,
    reducers: {
        setName(state, action) {
            state.data=action.payload
        },
    },
});

let setName = editGroupSlice.actions.setName;

export const fetcheditGroupDataAction = createAsyncThunk(
    "editGroup",
    async (data: number, { dispatch }) => {
        let res=await getIntro(data)

        console.log('///////////',res.data)
        dispatch(setName(res.data))
    }
);

let editGroupReducer = editGroupSlice.reducer;
export default editGroupReducer;