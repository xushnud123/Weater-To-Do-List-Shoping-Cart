import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import product from "../utils/data/cartDate";

const slice = createSlice({
    name: 'shoppingCart',
    initialState: {
        products: product,
        cart: [],

    },
    reducers: {
        cartAdd: (state, action) => {
            const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) :
                    [...state.cart, {
                        ...item, qty: 1
                    }]
            }
        },
        removeCart: (state, action) => {
            if (action.payload.qty === 1) {
                console.log(action.payload.qty)
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                }
            }
            else {
                console.log(action.payload.qty)
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
                }
            }
        },
        adjustCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
            }
        },
    }
})


export const { cartAdd, removeCart, adjustCart, addCurrentItem } = slice.actions

export default slice.reducer



export const getUnresolvedBugs = createSelector(
    (state) => state.list,
    (list) => list.filter((bug) => bug.resolved)
);


