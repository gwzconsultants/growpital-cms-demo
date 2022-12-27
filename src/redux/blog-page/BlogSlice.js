import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async()=>{
    return fetch(`/api/blogs?sort=[date]&&populate=*`).then(
    (res)=> res.json()
    )
});
export const fetchBlogSearch= createAsyncThunk("blog/fetchBlog/search", async({value})=>{
console.log({value});
    return fetch(`/api/blogs?sort=[date]&&populate=*&&filters[$or][0][title][$contains]=${value}&filters[$or][1][description][$contains]=${value}&filters[$or][2][blog_category][category_name][$contains]=${value}`).then(
    (res)=> res.json()
    );
});




export const fetchBlogDetails = createAsyncThunk("blog/fetchBlogDetails", async({slug})=>{
    return fetch(`/api/blog-details?populate=*&&filters[slug][$eq]=${slug}`).then(
    (res)=> res.json()
    );
});



const blogSlice = createSlice({
name : "blog",
initialState:{
    loading:  false,
    error:null,
    blogs:[],
    blogDetails:[],
},
reducers:{},
extraReducers:{
    [fetchBlog.pending]: (state,action) =>{
        state.laoding = true;
    },
    [fetchBlog.fulfilled]: (state,action) =>{
        state.laoding = false;
        state.blogs = action.payload.data;
        state.error = action.payload.error
    },
    [fetchBlog.rejected]: (state,action) =>{
        state.laoding = false
        state.error = action.payload
    },

    [fetchBlogSearch.pending]: (state,action) =>{
        state.laoding = true;
    },
    [fetchBlogSearch.fulfilled]: (state,action) =>{
        state.laoding = false;
        state.blogs = action.payload.data;
    },
    [fetchBlogSearch.rejected]: (state,action) =>{
        state.laoding = false
        state.error = action.payload.error
    },
    


    [fetchBlogDetails.pending]: (state,action) =>{
        state.laoding = true;
    },
    [fetchBlogDetails.fulfilled]: (state,action) =>{
        state.laoding = false;
        state.blogDetails = action.payload.data;
    },
    [fetchBlogDetails.pending]: (state,action) =>{
        state.laoding = false
        state.error = action.payload
    },

}
})


export default blogSlice.reducer