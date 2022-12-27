import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchFourStep = createAsyncThunk("fetchFourStep", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/four-step-accordians`).then(
    (res)=> res.json() )
    }) 

const fourStepSlice= createSlice({
    name:"FourStep",
    initialState:{
        loading: false,
        error:null,
        accordian:[]
    },
    extraReducers:{
        [fetchFourStep.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchFourStep.fulfilled]:(state,action) =>{
            state.loading = false
            state.accordian = action.payload.data;
        },
        [fetchFourStep.rejected]:(state,action) =>{
            state.loading = false
            state.accordian = action.payload
        },
    }
})

 export default fourStepSlice.reducer