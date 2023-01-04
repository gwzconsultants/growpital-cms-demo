import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchFooterCategory = createAsyncThunk("/fetchFooterCategory", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/footer-categories?populate=*`).then(
    (res)=> res.json() )
    }) 

export const fetchFooter = createAsyncThunk("/fetchFooter", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/footers?populate=*`).then(
    (res)=> res.json() )
    }) 

const footerSlice = createSlice({
    name:"footer",
    initialState:{
        loading: false,
        error:null,
     footer_category:[],
     footer:[],
    },
    extraReducers:{
        [fetchFooter.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchFooter.fulfilled]:(state,action) =>{
            state.loading = false
            state.footer = action.payload.data;
        },
        [fetchFooter.rejected]:(state,action) =>{
            state.loading = false
            state.error = action.payload
        },
        [ fetchFooterCategory.pending]:(state,action) =>{
            state.loading = true
        },
        [ fetchFooterCategory.fulfilled]:(state,action) =>{
            state.loading = false
            state.footer_category = action.payload.data;
        },
        [ fetchFooterCategory.rejected]:(state,action) =>{
            state.loading = false
            state.error = action.payload
        },
    }
})

 export default footerSlice.reducer