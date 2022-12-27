import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchSuperstar = createAsyncThunk("about/teem", async()=> {
    return fetch(`http://3.110.118.82:1337/api/co-founders?sort=[id]&&populate=*`).then((res)=> res.json())
})



const superstarSlice = createSlice(
    {
        name: "superstar",
        initialState:{
            loading:  false,
            error:null,
            teem:[],  
        },
        reducers:{},
        extraReducers:{
            [fetchSuperstar.pending]:(state,action) =>{
                state.loading = true
            },
            [fetchSuperstar.fulfilled]:(state,action) =>{
                state.loading = false
                state.teem = action.payload.data
            },
            [fetchSuperstar.rejected]:(state,action) =>{
                state.loading = false
                state.error = action.payload
            },
        }

    }
)

export default superstarSlice.reducer