import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../../api/page-api";
import { RootState } from "../../../../app/store";
import { getBlog } from "../blogSlice";
import { commentInfoRequest, commentState } from "./comment-dto";

const initialState: commentState = {
    state: 'idle',
    msg: '',
    listComment: [],
}

export const getComment =createAsyncThunk(
    'Comment/getComment', async(req, thunkApi) => {
        const response: any = await pageApi.getComment();
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const sendComment = createAsyncThunk(
    'Comment/postComment', async(params: commentInfoRequest, thunkApi) => {
        const response: any = await pageApi.postComment(params);
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const commentSlice = createSlice ({
    name: 'Comment',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getComment.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getComment.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getComment.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listComment = action.payload.data.rows;
        })
        .addCase(sendComment.pending, (state) => {
            state.state ='pending';
        })
        .addCase(sendComment.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(sendComment.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
        })
    }
})

export const { reducer, actions } = commentSlice;
// export const { } = actions;
export const selectCommentState = (state: RootState) => state.commentState;
export default reducer;

