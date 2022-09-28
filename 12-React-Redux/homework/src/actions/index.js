export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(payload) {
    return { type: REMOVE_MOVIE_FAVORITE, payload };
} 

export function getMovies(titulo) {
    console.log('En getMovies');
    return function (dispatch) {
        console.log(`Buscando por: ${titulo}`);
        return fetch('http://www.omdbapi.com/?apikey=26b32f39&s=' + titulo)
            .then(response => response.json())
            .then(json => {
                console.log(`Respuesta de omdbapi: ${json.Search}`);
                dispatch({ type: GET_MOVIES, payload: json });
            });
    };
}

export function getMovie() {
    return {type: GET_MOVIE};
}

export function receiveMovie(idMovie) {
    return function (dispatch) {
        dispatch(getMovie());
        return fetch(`http://www.omdbapi.com/?apikey=26b32f39&i=${idMovie}&plot=full`)
            .then(response => response.json())
            .then(json => dispatch({ type: RECEIVE_MOVIE, payload: json }));
    };
}