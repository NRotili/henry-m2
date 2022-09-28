import { GET_MOVIES, GET_MOVIE, RECEIVE_MOVIE, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    loadingDetail: false
};

// function rootReducer(state = initialState, action) {
function rootReducer(state = initialState, { type, payload }) {
    console.log(`state: ${state}`);
    if (type === ADD_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(payload)
        };
    }
    if (type === GET_MOVIES) {
        console.log(`En reducer GET_MOVIES, movies: ${payload.Search}`);
        return {
            ...state,
            moviesLoaded: payload.Search
        };
    }
    if (type === GET_MOVIE) {
        return {
            ...state,
            movieDetail: {},
            loadingDetail: true
        };
    }
    if (type === RECEIVE_MOVIE) {
        return {
            ...state,
            loadingDetail: false,
            movieDetail: payload
        };
    }
    if (type === REMOVE_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter((e) => e.id !== payload)
        };
    }
    return state;
}

export default rootReducer;