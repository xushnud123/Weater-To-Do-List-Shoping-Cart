import { configureStore } from "@reduxjs/toolkit";
import reducer from './shoppingCart'

export default function() {
    return configureStore({
        reducer,
    })
}