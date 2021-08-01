import {get} from "axios";

const URL = "https://react-cdp-api.herokuapp.com/movies";

class MoviesService {
    getMovies = async (search, searchBy, limit) => {
        const response = await get(`${URL}`, {params: {search, searchBy, limit}});
        return response.data.data;
    }

    getMovieByID = async (id) => {
        const response = await get(`${URL}/${id}`);
        return response.data;
    }
}

const service = new MoviesService();

export default service;
