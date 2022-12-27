import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchCounter = createAsyncThunk("fetchCounter", async()=>{

    return fetch(`/api/counters?populate=*`).then(
    (res)=> res.json() )
    }) 

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        loading: false,
        error:null,
      counter:[]
    },
    extraReducers:{
        [fetchCounter.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchCounter.fulfilled]:(state,action) =>{
            state.loading = false
            state.counter = action.payload.data;
        },
        [fetchCounter.rejected]:(state,action) =>{
            state.loading = false
            state.plans = action.payload
        },
    }
})

 export default counterSlice.reducer