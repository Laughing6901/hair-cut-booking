import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageApi } from "../../../api/page-api";
import { RootState } from "../../../app/store";
import { blogState } from "./blog-dto";

const initialState: blogState = {
    state: 'idle',
    msg: '',
    listBlog: [],
    blog: {
        blog_id: 0,
        name: "",
        image_blogs: "",
        description: "",
        content: "",
        comments: [],
        created_date:"",
    }
}

export const getBlog =createAsyncThunk(
    'Blog/getBlog', async(req:number, thunkApi) => {
        console.log(req);
        const response: any = await pageApi.getBlog();
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
        // thunkApi.dispatch(setAccount(response.Account));
      // The value we return becomes the `fulfilled` action payload
      if(req !== 0 ) {
          console.log("here");
          let blog: any = response.data.rows.filter((item:any) => {
              if(item.blog_id === req) 
              return item
          })
          console.log("test:", blog);
          thunkApi.dispatch(setSingleBlog(blog));
      }
      return response;
    }
)

export const blogSlice = createSlice ({
    name: 'Blog',
    initialState,
    reducers: {
        setSingleBlog: (state,action:PayloadAction<any>) => {
            state.blog = action.payload;
            state.state = 'single';
        },
        setBlogState: (state, action:PayloadAction<any>) => {
            state.state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getBlog.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getBlog.rejected, (state, action: PayloadAction<any>) => {
        state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getBlog.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listBlog = action.payload.data.rows;
        })
    }
})

export const { reducer, actions } = blogSlice;
export const { setSingleBlog, setBlogState } = actions;
export const selectBlogState = (state: RootState) => state.blogState;
export default reducer;

