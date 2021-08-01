import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import './DetailsPage.scss';
import service from "../../services/search";

export const DetailsPage = () => {
    const movieID = useParams().id;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        service.getMovieByID(movieID)
            .then(e => setMovie(e))
    }, []);

    return (
        <>
            <div className="header">
                <Link to={`/`}>Back to Movies Catalog</Link>
            </div>
            <div className="container">
                <div className="movie-image">
                    <img src={movie.poster_path}/>
                </div>
                <div className="movie-info">
                    <div className="title">{movie.title}</div>
                    <div className="details">
                        <div className="year">{movie.release_date}</div>
                        <div className="length">{movie["runtime"]} min</div>
                        <div className="genre">{movie.genres}</div>
                    </div>
                    <div className="overview">{movie.overview}</div>
                </div>

            </div>
        </>
    );
}
