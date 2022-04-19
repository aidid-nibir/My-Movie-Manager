import * as actionTypes from '../../store/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import styles from './MovieToWatch.module.css'
import Moviecard from '../MovieCard/MovieCard';
import React, { useEffect } from 'react';
import Moviebucket from '../MovieBucket/MovieBucket';
import Spinner from '../../uiOrnaments/Spinner/Spinner';

const MovieToWatch = () => {
    const moviesFromServer = useSelector((state) => state.loadedMovies)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionTypes.getMovies());
    }, [dispatch]);

    let moviesLoadedFromServer = <Spinner />
    if (moviesFromServer.length > 0) {
        moviesLoadedFromServer = moviesFromServer.map((movie) => {
            return <Moviecard
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                key={movie.imdbID}
                movieID={movie.imdbID}
                onClick={
                    (userPreferenceType, title, movieID, year, poster) => {
                        dispatch({
                            type: actionTypes.ADD_TO_BUCKET,
                            movie: {
                                title: title,
                                poster: poster,
                                year: year,
                                movieID: movieID,
                                userPreference: userPreferenceType
                            }
                        })
                    }
                } />
        })
    }

    return (
        <div>
            <div className={styles.movieList}>
                {moviesLoadedFromServer}
            </div>
            <div className={styles.moviesInBucket}>
                <Moviebucket />
            </div>
        </div>
    )
}


export default MovieToWatch;