import { data } from "../Data";
import { ADD_TO_CART, FILTERED_SHOP, GET_All_Shop } from "./types";

const initialState = {
    products: data,
    cart: [],
    totalAmount: 0,
    filtershop: []

}
export const shopReducers = (state = initialState, action) => {
    console.log("🚀 ~ file: reducers.js:10 ~ cart", initialState.products)
    switch (action.type) {
        case GET_All_Shop:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_CART:
            console.log(state.cart, "🚀 ~ file: reducers.js:19 ~ shopReducers ~ action.payload", action.payload)
            const itemExists = state.cart.find(i => i.id === action.payload?.id);
            if (itemExists) {
                return {
                    ...state,
                    cart: state.cart.map(i => {
                        return i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i;
                    })
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };
        case FILTERED_SHOP:
            console.log("🚀 ~ file: reducers.js:35 ~ shopReducers ~ action.payload.id", action.payload.id)
            const filteredProduict = initialState.products.filter(p => p.id === action.payload)
            console.log("🚀 ~ file: reducers.js:35 ~ shopReducers ~ filteredProduict", filteredProduict)

            return { ...state, products: filteredProduict }
        default:
            return state;
    }
}