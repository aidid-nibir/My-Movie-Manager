import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import styles from './MovieCard.module.css'

const MovieCard = ({ title, movieID, year, poster, onClick }) => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.cardBody}>
                    <CardMedia className={styles.cardImage}
                        component="img"
                        height="250px"
                        image={poster}
                        alt={title}
                    />
                    <div className={styles.fixCardBody}>
                        <div>
                            Year: {year}
                            <br />
                            Movie Name: {title}
                        </div>
                    </div>
                    <CardActions disableSpacing style={{ padding: "0px 35px 10px 35px" }}>
                        <IconButton aria-label="Add To Favorites" onClick={() => onClick(0, title, movieID, year, poster)}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Watch Later" onClick={() => onClick(1, title, movieID, year, poster)} style={{ marginLeft: 'auto' }}>
                            <WatchLaterIcon />
                        </IconButton>
                    </CardActions>
                </div>
            </div >
        </>
    )
}

export default MovieCard;