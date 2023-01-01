import { ADD_TO_CART, FILTERED_SHOP, GET_All_Shop } from "./types"

export const shopAction = (array) => (dispatch) => {
    dispatch({ type: GET_All_Shop, payload: array })
}

export const addToCartAction = (obj) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: obj })
}
export const filteredShopAction = (id) => (dispatch) => {
    dispatch({ type: FILTERED_SHOP, payload: id })
}