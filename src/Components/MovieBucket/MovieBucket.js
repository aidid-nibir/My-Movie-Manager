import React from 'react';
import { useSelector } from 'react-redux'
import styles from './MovieBucket.module.css'
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';

const MovieBucket = (props) => {
    const favouriteMovies = useSelector((state) => state.favouriteMovies)
    console.log(favouriteMovies)
    const watchLaterList = useSelector((state) => state.watchLaterList)
    return (
        < div >
            <div className={styles.movieBucketDiv}>
                <header className={styles.header}>Favourite Movie List</header>
                <ul>
                    {favouriteMovies.map((movie) => (
                        movie.userPreference === 0 ?
                            <li className={styles.bucketBody} key={movie.movieID}>
                                <img className={styles.bucketImg} src={movie.poster} alt={movie.title} />
                                <p className={styles.bucketP}>{movie.title}</p>
                                <DeleteIcon style={{ marginLeft: 'auto' }} />
                            </li>
                            : null
                    ))}

                </ul>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.movieBucketDiv}>
                <header className={styles.header}>Watch Later Movie List</header>
                <ul>
                    {watchLaterList.map((movie) => (
                        movie.userPreference === 1 ?
                            <li className={styles.bucketBody} key={movie.movieID}>
                                <img className={styles.bucketImg} src={movie.poster} alt={movie.title} />
                                <p className={styles.bucketP}>{movie.title}</p>
                            </li>
                            : null
                    ))}
                </ul>
            </div>
        </ div>
    );
}

export default MovieBucket;