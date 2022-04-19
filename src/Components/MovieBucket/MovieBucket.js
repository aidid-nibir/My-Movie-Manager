import * as actionTypes from '../../store/actions/actions'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './MovieBucket.module.css'
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';

const MovieBucket = (props) => {
    const dispatch = useDispatch();
    const favouriteMovies = useSelector((state) => state.favouriteMovies)
    const watchLaterList = useSelector((state) => state.watchLaterList)

    const removeFavMovie = (mID) => {
        dispatch(actionTypes.removeFromFavouriteBucket(mID));
    }
    const removeWlMOvie = (mID) => {
        dispatch(actionTypes.removeFromWatchLaterBucket(mID));
    }
    return (
        < div >
            <div className={styles.movieBucketDiv}>
                <header className={styles.header}>Favourite Movie List</header>
                <ul>
                    {favouriteMovies.map((favouriteMovie) => (
                        favouriteMovie.userPreference === 0 ?
                            <li className={styles.bucketBody} key={favouriteMovie.movieID}>
                                <img className={styles.bucketImg} src={favouriteMovie.poster} alt={favouriteMovie.title} />
                                <p className={styles.bucketP}>{favouriteMovie.title}</p>
                                <DeleteIcon className={styles.deleteIcon} onClick={() => removeFavMovie(favouriteMovie.movieID)} />
                            </li>
                            : null
                    ))}

                </ul>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.movieBucketDiv}>
                <header className={styles.header}>Watch Later Movie List</header>
                <ul>
                    {watchLaterList.map((watchLaterMovie) => (
                        watchLaterMovie.userPreference === 1 ?
                            <li className={styles.bucketBody} key={watchLaterMovie.movieID}>
                                <img className={styles.bucketImg} src={watchLaterMovie.poster} alt={watchLaterMovie.title} />
                                <p className={styles.bucketP}>{watchLaterMovie.title}</p>
                                <DeleteIcon className={styles.deleteIcon} onClick={() => removeWlMOvie(watchLaterMovie.movieID)} />
                            </li>
                            : null
                    ))}
                </ul>
            </div>
        </ div>
    );
}

export default MovieBucket;