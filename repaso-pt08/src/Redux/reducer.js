import { ADD_PRODUCT,
         GET_PRODUCTS,
         LOADING,
         DELETE,
         GET_LOCAL_PRODUCT_BY_ID,
         GET_PRODUCT_BY_ID,
         CLEAR_DETAIL } from "./actionTypes";

const initialState = {
    products: [],
    productDetail: {},
    localProduct: [],
    loading: false,
    description: false
}

let localId = 5001;

export default function reducer(state = initialState, action) {
    console.log(`En reducer, action.type: ${action.type}`);
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                localProduct: [...state.localProduct, {...action.payload, id: localId++}]
            }
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case DELETE:
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload),
                localProduct: state.localProduct.filter(p => p.id !== action.payload)
            }
        case GET_LOCAL_PRODUCT_BY_ID:
            // TODO: implementar!
            return state;
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                loading: false,
                products: [action.payload],
                productDetail: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                productDetail: {}
            }
        default:
            return state;
    }
}