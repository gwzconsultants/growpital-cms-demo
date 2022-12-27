import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchServicePlan = createAsyncThunk("fetchServicePlan", async()=>{

    return fetch(`/api/service-plans?sort=[id]&&populate=*`).then(
    (res)=> res.json() )
    }) 

const servicePlanSlice = createSlice({
    name:"service plan",
    initialState:{
        loading: false,
        error:null,
        plans:[]
    },
    extraReducers:{
        [fetchServicePlan.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchServicePlan.fulfilled]:(state,action) =>{
            state.loading = false
            state.plans = action.payload.data;
        },
        [fetchServicePlan.rejected]:(state,action) =>{
            state.loading = false
            state.plans = action.payload
        },
    }
})

 export default servicePlanSlice.reducer