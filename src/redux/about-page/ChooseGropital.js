import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchChoosegrowpital = createAsyncThunk("about/choose-growpital", async()=> {
    return fetch(`/api/why-choose-growpitals?populate=*`).then((res)=> res.json())
})



const chooseGrowpitalSlice = createSlice(
    {
        name: "why-choose-growpitals",
        initialState:{
            loading:  false,
            error:null,
            cards:[],  
        },
        reducers:{},
        extraReducers:{
            [fetchChoosegrowpital.pending]:(state,action) =>{
                state.loading = true
            },
            [fetchChoosegrowpital.fulfilled]:(state,action) =>{
                state.loading = false
                state.cards = action.payload.data
            },
            [fetchChoosegrowpital.rejected]:(state,action) =>{
                state.loading = false
                state.error = action.payload
            },
        }

    }
)

export default chooseGrowpitalSlice.reducer