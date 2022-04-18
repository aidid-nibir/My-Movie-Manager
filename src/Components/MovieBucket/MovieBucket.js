import React from 'react';
import { useSelector } from 'react-redux'
import styles from './MovieBucket.module.css'

const MovieBucket = (props) => {
    const myMovies = useSelector((state) => state.myMovies)
    return (
        < div >
            <div className={styles.movieBucketDiv}>
                <header className={styles.header}>Favourite Movie List</header>
                <ul>
                    {myMovies.map((movie) => (
                        movie.userPreference === 0 ?
                            <li className={styles.bucketBody} key={movie.movieID}>
                                <img className={styles.bucketImg} src={movie.poster} alt={movie.title} />
                                <p className={styles.bucketP}>{movie.title}</p>
                            </li>
                            : null
                    ))}

                </ul>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.movieBucketDiv}>
                <header className={styles.header}>Watch Later Movie List</header>
                <ul>
                    {myMovies.map((movie) => (
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
