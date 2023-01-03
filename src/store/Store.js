import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../redux/blog-page/BlogSlice";
import FaqsSlice from "../redux/faqs-page/FaqsSlice";
import AboutSlice from "../redux/about-page/AboutSlice";
import contactUsSlice from "../redux/contact-page/contactUsSlice";
import HomePageSlice from "../redux/home-page/HomePageSlice";




export default configureStore({
    reducer :{
      blog : BlogSlice,
      faqs : FaqsSlice,
      home : HomePageSlice,
      aboutUsPage : AboutSlice,
      contactUs:contactUsSlice

    } 
})