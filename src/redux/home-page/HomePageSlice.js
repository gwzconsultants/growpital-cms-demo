import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchHomeIntroSection = createAsyncThunk("/fetchHomeIntroSection", async () => {

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-page-intro?populate=*`).then(
        (res) => res.json())
})


export const fetchHomeSecondSection = createAsyncThunk("/fetchHomeSecondSection", async () => {

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-page-second-section?populate=*`).then(
        (res) => res.json())
})


export const fetchFourStepobj = createAsyncThunk("fetchFourStepoj", async () => {

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/four-step?populate=*`).then(
        (res) => res.json())
})


export const fetchCounterText = createAsyncThunk("fetchCounterText", async () => {

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-counter-section`).then(
        (res) => res.json())
})

export const fetchCounter = createAsyncThunk("fetchCounter", async () => {

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/counters?populate=*`).then(
        (res) => res.json())
})



export const fetchServicePlan = createAsyncThunk("fetchServicePlan", async () => {

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/service-plans?sort=[id]&&populate=*`).then(
        (res) => res.json())
})


export const fetchSuperstarHome = createAsyncThunk("fetchSuperstarHome", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/co-founders?sort=[id]&&populate=*`).then((res)=> res.json())
})


export const fetchHaveQue = createAsyncThunk("fetchHaveQue", async()=> {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-have-que?populate=*`).then((res)=> res.json())
})


export const fetchHomeFaqsAccordian = createAsyncThunk("homefetchFaqsAccordian", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/faqs-accordians?populate=*&&sort=[id]`).then(
    (res)=> res.json() )
    
});
export const fetchJoinTelegram = createAsyncThunk("fetchJoinTelegram", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-last-section?populate=*`).then(
    (res)=> res.json() )
    
});
export const fetchTestimonial = createAsyncThunk("fetchTestimonial", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-testimonial?populate=testimonials.image`).then(
    (res)=> res.json() )
    
});

export const fetchHomePageSuperStar = createAsyncThunk("fetchHomePageSuperStar", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-page-superstar`).then(
    (res)=> res.json() )
    
});
export const fetchHomePageServiceCard = createAsyncThunk("fetchHomePageServiceCard", async()=>{

    return fetch(`${process.env.REACT_APP_BASE_URL}/api/home-service-card`).then(
    (res)=> res.json() )
    
});

const homePageSlice = createSlice({
    name: "home page",
    initialState: {
        loading: false,
        error: null,
        homeIntro: [],
        homeSecond: [],
        accordianobj: [],
        counter: [],
        counterText:[],
        plans: [],
        ServiceCard_heading: [],
        teem:[],
        teemHeading:[],
        que:[],
        faqsAccords:[],
        joinTelegram:[],
        testimonial:[],
    
    },
    extraReducers: {

        // home Intro section
        [fetchHomeIntroSection.pending]: (state, action) => {
            state.loading = true
        },
        [fetchHomeIntroSection.fulfilled]: (state, action) => {
            state.loading = false
            state.homeIntro = action.payload.data;
        },
        [fetchHomeIntroSection.rejected]: (state, action) => {
            state.loading = false
            state.error  = action.payload
        },


        //  home second section 
        [fetchHomeSecondSection.pending]: (state, action) => {
            state.loading = true
        },
        [fetchHomeSecondSection.fulfilled]: (state, action) => {
            state.loading = false
            state.homeSecond = action.payload.data;
        },
        [fetchHomeSecondSection.rejected]: (state, action) => {
            state.loading = false
            state.error  = action.payload
        },


        // home counter section
        [fetchCounter.pending]: (state, action) => {
            state.loading = true
        },
        [fetchCounter.fulfilled]: (state, action) => {
            state.loading = false
            state.counter = action.payload.data;
        },
        [fetchCounter.rejected]: (state, action) => {
            state.loading = false
            state.error  = action.payload
        },



        [fetchCounterText.pending]: (state, action) => {
            state.loading = true
        },
        [fetchCounterText.fulfilled]: (state, action) => {
            state.loading = false
            state.counterText = action.payload.data;
        },
        [fetchCounterText.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },



        // home four step section
        [fetchFourStepobj.pending]: (state, action) => {
            state.loading = true
        },
        [fetchFourStepobj.fulfilled]: (state, action) => {
            state.loading = false
            state.accordianobj = action.payload.data;
        },
        [fetchFourStepobj.rejected]: (state, action) => {
            state.loading = false
            state.error  = action.payload
        },


        [fetchServicePlan.pending]: (state, action) => {
            state.loading = true
        },
        [fetchServicePlan.fulfilled]: (state, action) => {
            state.loading = false
            state.plans = action.payload.data;
        },
        [fetchServicePlan.rejected]: (state, action) => {
            state.loading = false
            state.error  = action.payload
        },

        [fetchSuperstarHome.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchSuperstarHome.fulfilled]:(state,action) =>{
            state.loading = false
            state.teem = action.payload.data
        },
        [fetchSuperstarHome.rejected]:(state,action) =>{
            state.loading = false
            state.error = action.payload
        },

        [fetchHaveQue.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchHaveQue.fulfilled]:(state,action) =>{
            state.loading = false
            state.que = action.payload.data
        },
        [fetchHaveQue.rejected]:(state,action) =>{
            state.loading = false
            state.error = action.payload
        },

        [fetchHomeFaqsAccordian.pending]: (state,action) =>{
            state.laoding = true;
        },
        [fetchHomeFaqsAccordian.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.faqsAccords = action.payload.data;  
        },
        [fetchHomeFaqsAccordian.rejected]: (state,action) =>{
            state.laoding = false
            state.error = action.payload
        },
        [fetchJoinTelegram.pending]: (state,action) =>{
            state.laoding = true;
        },
        [fetchJoinTelegram.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.joinTelegram = action.payload.data;  
        },
        [fetchJoinTelegram.rejected]: (state,action) =>{
            state.laoding = false
            state.error = action.payload
        },

        [fetchTestimonial.pending]: (state,action) =>{
            state.laoding = true;
        },
        [fetchTestimonial.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.testimonial = action.payload.data;  
                       ;  
        },
        [ fetchHomePageSuperStar.rejected]: (state,action) =>{
            state.laoding = false
            state.error = action.payload
        },
        [ fetchHomePageSuperStar.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.teemHeading = action.payload.data;  
                       ;  
        },
        [ fetchHomePageSuperStar.rejected]: (state,action) =>{
            state.laoding = false
            state.error = action.payload
        },
        [ fetchHomePageServiceCard.rejected]: (state,action) =>{
            state.laoding = false
            state.error = action.payload
        },
        [ fetchHomePageServiceCard.fulfilled]: (state,action) =>{
            state.laoding = false;
            state.ServiceCard_heading = action.payload.data;  
                       
        },
        [ fetchHomePageServiceCard.rejected]: (state,action) =>{
            state.laoding = false
            state.error = action.payload
        },
    }
})

export default homePageSlice.reducer