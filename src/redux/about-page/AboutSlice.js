import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchChoosegrowpital = createAsyncThunk("about/choose-growpital", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/about-card-section?populate=*`).then((res)=> res.json())
})


export const fetchaAboutSecondSection = createAsyncThunk("about/AboutSecondSection", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/about-second-section`).then((res)=> res.json())
})



export const fetchSuperstar = createAsyncThunk("about/teem", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/co-founders?sort=[id]&&populate=*`).then((res)=> res.json())
})



export const fetchPatnerLogo = createAsyncThunk("about/patner-logo", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/portfolio-patner-logos?populate=*`).then((res)=> res.json())
})


export const fetchHowItWork = createAsyncThunk("about/HowItWork", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/about-how-it-work?populate=*`).then((res)=> res.json())
})

const aboutSlice = createSlice(
    {
        name: "about-us-page",
        initialState:{
            loading:  false,
            error:null,
            cards:[],  
            teem:[], 
            Logo:[],   
            datas:[],   
            howItWork:[],   
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

            [fetchaAboutSecondSection.pending]:(state,action) =>{
                state.loading = true
            },
            [fetchaAboutSecondSection.fulfilled]:(state,action) =>{
                state.loading = false
                state.datas = action.payload.data
            },
            [fetchaAboutSecondSection.rejected]:(state,action) =>{
                state.loading = false
                state.error = action.payload
            },

            [fetchHowItWork.pending]:(state,action) =>{
                state.loading = true
            },
            [fetchHowItWork.fulfilled]:(state,action) =>{
                state.loading = false
                state.howItWork = action.payload.data
            },
            [fetchHowItWork.rejected]:(state,action) =>{
                state.loading = false
                state.error = action.payload
            },
        }

    }
)

export default aboutSlice.reducer