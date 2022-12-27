import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../redux/blog-page/BlogSlice";
import FaqsSlice from "../redux/faqs-page/FaqsSlice";
import Superstar from "../redux/about-page/Superstar";
import patnerLogoSlice from "../redux/about-page/PatnerLogo";
import ServicePlanSlice from "../redux/home-page/ServicePlanSlice";
import CounterSlice from "../redux/home-page/CounterSlice";
import ChooseGropitalSlice from "../redux/about-page/ChooseGropital";
import FourStepSlice from "../redux/home-page/FourStepSlice";




export default configureStore({
    reducer :{
      blog : BlogSlice,
      faqs : FaqsSlice,
      Superstar: Superstar,
      Servieceplan: ServicePlanSlice,
      patnerLogo: patnerLogoSlice,
      counterUp:CounterSlice ,
      choiceCard : ChooseGropitalSlice,
      fourStep : FourStepSlice
    }
})