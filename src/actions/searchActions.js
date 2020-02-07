import axios from 'axios'
import {APIKey, LANGUAGE} from '../utils/ApiKey'
import {FETCH_MOVIES, SEARCH_MOVIE} from "./types";

export const searchMovie = text =>  dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=${LANGUAGE}&query=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            payload: response.data.Search
        }))
        .then(err =>console.log(err))
}