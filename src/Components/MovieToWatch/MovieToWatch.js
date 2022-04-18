import * as actionTypes from '../../store/actions/actions'
import { connect, useSelector, useDispatch } from 'react-redux'
import styles from './MovieToWatch.module.css'
import Moviecard from '../MovieCard/MovieCard';
import React, { useEffect } from 'react';
import Moviebucket from '../MovieBucket/MovieBucket';
import Spinner from '../../uiOrnaments/Spinner/Spinner'

const MovieToWatch = (props) => {
    const moviesFromServer = useSelector((state) => state.loadedMovies)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("I am being renderedcghjfghj");
        // props.onIntiMovies();
        dispatch(actionTypes.getMovies());
    }, []);

    let moviesLoadedFromServer = <Spinner />
    if (moviesFromServer.length > 0) {
        moviesLoadedFromServer = moviesFromServer.map((movie) => {
            return <Moviecard title={movie.Title} poster={movie.Poster} year={movie.Year} key={movie.imdbID} movieID={movie.imdbID} onClick={(userPreferenceType, title, movieID, year, poster) => props.onStoreMoviesToBucket(userPreferenceType, title, movieID, year, poster)} />
        })
    }

    let favouriteMovies;
    if (props.moviesInBucket.length > 0) {
        favouriteMovies = props.moviesInBucket.map(storedMovies => {
            if (storedMovies.userPreference === 0) {
                return <Moviebucket title={storedMovies.title} poster={storedMovies.poster} key={storedMovies.movieID} />
            }
        })
    }

    let watchLaterMovieList
    if (props.moviesInBucket.length > 0) {
        watchLaterMovieList = props.moviesInBucket.map(storedMovies => {
            if (storedMovies.userPreference === 1) {
                return <Moviebucket title={storedMovies.title} poster={storedMovies.poster} key={storedMovies.movieID} />
            }
        })
    }

    return (
        <div>
            Movies To Watch
            <div className={styles.movieList}>
                {moviesLoadedFromServer}
            </div>
            <div className={styles.moviesInBucket}>
                {favouriteMovies}
                {watchLaterMovieList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // moviesFromServer: state.loadedMovies,
        moviesInBucket: state.myMovies,
        err: state.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onIntiMovies: () => dispatch(actionTypes.getMovies()),
        onStoreMoviesToBucket: (userPreferenceType, title, movieID, year, poster) => dispatch({ type: actionTypes.ADD_TO_BUCKET, title: title, poster: poster, year: year, movieID: movieID, userPreference: userPreferenceType }),
        onRemoveMoviesToBucket: (rmID) => dispatch({ type: actionTypes.REMOVE_FROM_BUCKET, removedMovieID: rmID })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieToWatch);