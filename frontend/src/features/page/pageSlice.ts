import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { breadCrumb } from "./page-dto";

const initialState: breadCrumb = {
    tab: "Home"
}

export const pageSlice = createSlice({
    name: 'Page',
    initialState,
    reducers: {
       setTab: (state, action: PayloadAction<string>) => {
        state.tab = action.payload;
        
       }
    }
})

export const { reducer, actions } = pageSlice;
export const { setTab } = actions;
export const selectPageState = (state: RootState) => state.pageState;
export default reducer;