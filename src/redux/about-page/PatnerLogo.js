import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPatnerLogo = createAsyncThunk("about/patner-logo", async()=> {
    return fetch(`http://3.110.118.82:1337/api/portfolio-patner-logos?populate=*`).then((res)=> res.json())
})



const patnerLogoSlice = createSlice(
    {
        name: "patnerLogo",
        initialState:{
            loading:  false,
            error:null,
            Logo:[],  
        },
        reducers:{},
        extraReducers:{
            [fetchPatnerLogo.pending]:(state,action) =>{
                state.loading = true
            },
            [fetchPatnerLogo.fulfilled]:(state,action) =>{
                state.loading = false
                state.Logo = action.payload.data
            },
            [fetchPatnerLogo.rejected]:(state,action) =>{
                state.loading = false
                state.error = action.payload
            },
        }

    }
)

export default patnerLogoSlice.reducer