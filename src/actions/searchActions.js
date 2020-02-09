import axios from 'axios'
import {APIKey, LANGUAGE} from '../utils/ApiKey'
import {FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_MOVIE} from "./types";

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
            payload: response.data.results
        }))
        .then(err =>console.log(err))
}

export const fetchMovie = id  => dispatch  => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=${LANGUAGE}`)
        .then(response => dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        }))
        .then(err => console.log(err))
}

export const setLoading = () => {

    return{
        type: LOADING,
    }
}