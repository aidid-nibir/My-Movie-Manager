import * as actionTypes from './actions/actions'

const initialState = {
    loadedMovies: {},
    myMovies: [],
    favouriteMovies: [],
    favError: '',
    watchLaterList: [],
    wlError: '',
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
            break;


        case actionTypes.SET_MOVIES_FAILED:
            return {
                ...state,
                error: true
            };
            break;


        case actionTypes.ADD_TO_BUCKET:
            console.log('I am In reducer')
            if (action.movie.userPreference === 0) {
                if (state.favouriteMovies.length > 0) {
                    const flag = state.favouriteMovies.find((item) => item.movieID === action.movie.movieID);
                    console.log({ flag });
                    let newMovies = state.favouriteMovies;
                    if (!flag) {
                        newMovies = [...state.favouriteMovies, action.movie];
                    }
                    return {
                        ...state,
                        favouriteMovies: newMovies
                    };
                }
                else {
                    return {
                        ...state,
                        favouriteMovies: [action.movie]
                    };
                }
            }
            else {
                if (state.watchLaterList.length > 0) {
                    const flag1 = state.watchLaterList.find((item) => item.movieID === action.movie.movieID);
                    console.log({ flag1 });
                    let brandNewMovie = state.watchLaterList;
                    if (!flag1) {
                        brandNewMovie = [...state.watchLaterList, action.movie];
                    }
                    return {
                        ...state,
                        watchLaterList: brandNewMovie
                    };
                }
                else {
                    return {
                        ...state,
                        watchLaterList: [action.movie]
                    };
                }

            }
            break;


        case actionTypes.REMOVE_FROM_BUCKET:
            return {
                ...state,
                error: true
            };
            break
        default:
            break;
    }
    return state;
};

export default reducer;