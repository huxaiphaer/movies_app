import axios from 'axios'
import {APIKey, LANGUAGE, URL} from '../utils/ApiKey'
import {AUTO_COMPLETE_INPUT, FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_MOVIE} from "./types";

export const searchMovie = text =>  dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch =>{
    axios.get(`${URL}/3/search/movie/?api_key=${APIKey}&language=${LANGUAGE}
    &query=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            payload: response.data.results
        }))
        .then(err =>console.log(err))
}

export const fetchMovie = id  => dispatch  => {
    axios.get(`${URL}/3/movie/${id}?api_key=${APIKey}&language=${LANGUAGE}`)
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

export const searchAutoCompleteMovies = text => dispatch =>{
    axios.get(`${URL}/3/search/movie/?api_key=${APIKey}&language=${LANGUAGE}
    &query=${text}`)
        .then(response => dispatch({
            type: AUTO_COMPLETE_INPUT,
            payload: response.data.results
        }))
        .then(err =>console.log(err))
}

