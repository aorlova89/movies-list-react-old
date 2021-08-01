import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setParam} from "../../store/params/actions";

import './Main.scss';
import {Button} from "../../components/Button";
import {getMovies} from "../../store/movies/thunk";
import {Link} from "react-router-dom";


export const Home = () => {
    const movies = useSelector( state => state.movies);
    const params = useSelector(state => state.params);

    const {query, searchBy, limit} = params;

    const dispatch = useDispatch();

    function setQuery(e) {
        dispatch(setParam("query", e.target.value));
    }

    function setSearchBy(e) {
        dispatch(setParam("searchBy", e.target.id));
    }

    function getButtons() {
        const className = "results-btn";
        const limits = ["10", "20", "30"];

        return limits.map(button => (
            <Button
                name={button}
                onClick = {() => dispatch(setParam("limit", button))}
                className = {className}
                isActive = {button === limit}
            />
        ));
    }

    function onSearchClick()  {
        dispatch(getMovies());
    }

    useEffect(() => dispatch(getMovies()), []);

    return (
        <>
            <div className="top-menu">
                <div className="header">Movies Catalog
                </div>
                <div className="search-panel">
                    <div className="search-form">
                        <input type="text" onChange = {setQuery}
                               className="search-form-input"
                               placeholder={"Enter movie name"}>
                        </input>
                        <Button onClick = {onSearchClick} name="SEARCH" isActive/>
                    </div>
                    <div className="search-filters">
                        <span className="search-filters-span">Search By:</span>
                        <Button
                            name="TITLE"
                            onClick = {setSearchBy}
                            isActive = {searchBy === "TITLE"}
                        />
                        <Button
                            name="GENRES"
                            onClick = {setSearchBy}
                            isActive = {searchBy === "GENRES"}
                        />
                    </div>
                    <div className="show-results">
                    <span className="search-filters-span">
                        Show Results: </span>
                        {getButtons()}
                    </div>
                </div>
            </div>
            <div className="search-results">
                <div className="search-results">
                    {movies.map (movie => (
                        <Link to={`/movie/${movie.id}`} className="movie-item">
                            <img src={movie.poster_path}/>
                            <div className="movie-header">
                                <span className="movie-main-name">{movie.title}</span>
                            </div>
                            <div className="movie-details">
                                <span className="movie-year">{movie["release_date"]}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
