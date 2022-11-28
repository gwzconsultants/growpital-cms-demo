import { configureStore } from "@reduxjs/toolkit";
import CategioryFetch from "../fetchapi/CategioryFetch";


export default configureStore({
    reducer :{
        category : CategioryFetch
    }
})