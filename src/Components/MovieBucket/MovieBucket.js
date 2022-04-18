import React from 'react';
import styles from './MovieBucket.module.css'

const MovieBucket = (props) => {
    return (
        <div className={styles.movieBucketDiv}>
            <ul>
                <li className={styles.bucketBody} key={props.movieID}>
                    <img className={styles.bucketImg} src={props.poster} />
                    <p className={styles.bucketP}>{props.title}</p>
                </li>
            </ul>
        </div>
    );
}

export default MovieBucket;
