// import { createStore, applyMiddleware, compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

// Redux DevTools extensions
// npm i redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

// Otra forma alternativa de crear el store
// const initialState = {
//     moviesFavourites: [],
//     moviesLoaded: [],
//     movieDetail: {},
//     loadingDetail: false
//   };
    
// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(thunk), ReactReduxDevTools)
// );

export default store;