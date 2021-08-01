import React from "react";
import {useSelector, useDispatch, shallowEqual} from "react-redux";

function addFilmAction(title) {
    return { type: 'ADD_FILM', payload: title };
}

export function FilmsList() {
    const films = useSelector( state => state.data, shallowEqual);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                {films.map (film => (
                    <div className="movie-item">
                        <img src={film.src}/>
                        <div className="movie-header">
                            <span className="movie-main-name">{film.name}</span>
                        </div>
                    </div>
                ))}


            </div>

        </>
    );
}
