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
        case actionTypes.SET_MOVIES_FAILED:
            return {
                ...state,
                error: true
            };
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
        case actionTypes.REMOVE_FROM_FAVOURITE_BUCKET:
            // ` !!!!!!!!!!!!!!!!!!!!!!!!!! i need to knwo why this bello code (from line 71 to 78) is working!!!!!!!!!!!!!`
            // const newfavouriteMovies = [...state.favouriteMovies];
            // const index = newfavouriteMovies.findIndex(obj => obj.movieID === action.movieID);
            // console.log(index);
            // newfavouriteMovies.splice(index, 1, (index - 1))
            // return {
            //     ...state,
            //     favouriteMovies: newfavouriteMovies
            // };
            let newfavouriteMovies = state.favouriteMovies.filter(result => result.movieID !== action.movieID)
            return {
                ...state,
                favouriteMovies: [...newfavouriteMovies]
            };
        case actionTypes.REMOVE_FROM_WATCH_LATER_BUCKET:
            let newWatchLaterList = state.watchLaterList.filter(result => result.movieID !== action.movieID)
            return {
                ...state,
                watchLaterList: [...newWatchLaterList]
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;