import { configureStore } from "@reduxjs/toolkit";
import reducer from './shoppingCart'

 function createConfig() {
    return configureStore({
        reducer,
    })
}

export default createConfig