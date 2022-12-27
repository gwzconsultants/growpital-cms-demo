import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFaqsCategory = createAsyncThunk("faqs/fetchFaqsCategory", async()=>{
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/faqs-categories?sort=[id]&&populate=*`).then(
    (res)=> res.json())
    
});
export const fetchFaqsAccordian = createAsyncThunk("faqs/fetchFaqsAccordian", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/faqs-accordians?populate=*&&sort=[id]`).then(
    (res)=> res.json() )
    
});



const FaqsSlice = createSlice({
    name : "faqs",
    initialState:{
        loading:  false,
        error:null,
        category:[],
        faqsAccords:[],
    },
    
    extraReducers:{
        [fetchFaqsCategory.pending]: (state,action) =>{
            state.laoding = true;
        },
        [fetchFaqsCategory.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.category = action.payload.data;

      
          
        },
        [fetchFaqsCategory.rejected]: (state,action) =>{
            state.laoding = false
            state.category = action.payload
        },

        [fetchFaqsAccordian.pending]: (state,action) =>{
            state.laoding = true;
        },
        [fetchFaqsAccordian.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.faqsAccords = action.payload.data;  
        },
        [fetchFaqsAccordian.rejected]: (state,action) =>{
            state.laoding = false
            state.category = action.payload
        },
    
    
    }
    })
    
    
    export default FaqsSlice.reducer