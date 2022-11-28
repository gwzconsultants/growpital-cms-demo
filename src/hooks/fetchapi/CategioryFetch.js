import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchCategiry = createAsyncThunk("cocktails/fetchCocktails",async()=>
{
    return fetch('http://localhost:1337/api/categiries').then(
        (res)=> res.json()
        
    );
}
);



const  categiryFetch = createSlice({
    name:'categiry',
    initialState:
    {
        loading:false,
        categiries:[],
        error:null,
       
    },
    extraReducers:{
        [fetchCategiry.pending]:(state ,action) =>{
            state.loading = true
        },
        [fetchCategiry.fulfilled]:(state,action) =>{
            state.loading =false;
            state.categiries = action.payload.data
            
        },
        [fetchCategiry.rejected]:(state,action) =>{
            state.loading =false;
            state.cocktails = action.paylaod
        },

      }
})

export default categiryFetch.reducer