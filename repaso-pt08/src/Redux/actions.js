import { ADD_PRODUCT,
         GET_PRODUCTS,
         LOADING,
         DELETE,
         GET_PRODUCT_BY_ID,
         GET_LOCAL_PRODUCT_BY_ID,
         CLEAR_DETAIL } from "./actionTypes";

export function addProduct(payload) {
    return {
        type: ADD_PRODUCT,
        payload
    }
}

export function loading() {
    return {
        type: LOADING
    }
}

export function getProducts() {
    console.log('En getProducts');
    return function(dispatch) {
        console.log('En retorno de getProducts');
        dispatch(loading());
        return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_PRODUCTS,
            payload: json
        }));
    };
}

export function deleteProduct(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function getProductById(productId) {
    if(productId <= 5000) {
        return function(dispatch) {
            dispatch(loading());
            return fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
            .then(res => res.json())
            .then(json => dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: json
            }));
        };
    }
    return {
        type: GET_LOCAL_PRODUCT_BY_ID,
        payload: productId
    }
}

export function clearDetail() {
    return {
        type: CLEAR_DETAIL
    }
}