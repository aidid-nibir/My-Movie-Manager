import * as actionTypes from './actions/actions'

const initialState = {
    loadedMovies: {},
    myMovies: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return {
                // Loading Movies on app start
                ...state,
                loadedMovies: action.initiallyLoadedMovies,
            };
        case actionTypes.SET_MOVIES_FAILED:
            return {
                ...state,
                error: true
            };
        case actionTypes.ADD_TO_BUCKET:
            // const previousMovies = [...state.myMovies]
            // const result = movies.map(el => {
            //     if (el.movieID != action.movieID) {
            //         return el.movieID
            //     }
            // })
            // console.log({ result });
            const flag = state.myMovies.find((item) => item.movieID === action.movieID)
            console.log({ flag });
            let newMovies = state.myMovies;
            if (!flag) {
                newMovies = [...state.myMovies, {
                    title: action.title,
                    poster: action.poster,
                    year: action.year,
                    movieID: action.movieID,
                    userPreference: action.userPreference

                }];
            }
            return {
                //return the added list with movies
                ...state,
                // adding the movie bellow
                myMovies: newMovies
            };
        default:
            break;
    }
    return state;
};

export default reducer;