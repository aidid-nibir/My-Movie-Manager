import axios from 'axios';
export const SET_MOVIES = "SET_MOVIES";
export const ADD_TO_BUCKET = "ADD_TO_BUCKET";
export const SET_MOVIES_FAILED = "SET_MOVIES_FAILED";
export const REMOVE_FROM_BUCKET = "REMOVE_FROM_BUCKET";

export const setMovies = (movies) => {
    // console.log(movies);
    return {
        type: 'SET_MOVIES',
        initiallyLoadedMovies: movies
    }
}
export const setMoviesFailed = () => {
    return {
        type: 'SET_MOVIES_FAILED'
    }
}
export const getMovies = () => {
    return dispatch => {
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=3ef4f77f&s=movie')
            .then(response => {
                // console.log(response.data.Search);
                dispatch(setMovies(response.data.Search))
            })
            .catch(errorCallBack => {
                dispatch(setMoviesFailed)
            })
    }
}