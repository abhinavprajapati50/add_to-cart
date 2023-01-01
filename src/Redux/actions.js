import { ADD_TO_CART, DECREMENT_QUANTITY, FILTERED_SHOP, GET_All_Shop, INCREMENT_QUANTITY } from "./types"

export const shopAction = (array) => (dispatch) => {
    dispatch({ type: GET_All_Shop, payload: array })
}

export const addToCartAction = (obj) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: obj })
}
export const filteredShopAction = (id) => (dispatch) => {
    dispatch({ type: FILTERED_SHOP, payload: id })
}
export const incrementAction = (item) => (dispatch) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: item })
}
export const decrementAction = (item) => (dispatch) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: item })
}