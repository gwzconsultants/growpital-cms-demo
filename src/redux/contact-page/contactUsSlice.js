import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchContact = createAsyncThunk("/fetchcontact-us", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/contact-us-page?populate=*`).then(
    (res)=> res.json() )
    }) 

const contactSlice = createSlice({
    name:"contact-us",
    initialState:{
        loading: false,
        error:null,
     contact:[]
    },
    extraReducers:{
        [fetchContact.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchContact.fulfilled]:(state,action) =>{
            state.loading = false
            state.contact = action.payload.data;
        },
        [fetchContact.rejected]:(state,action) =>{
            state.loading = false
            state.counter = action.payload
        },
    }
})

 export default contactSlice.reducer