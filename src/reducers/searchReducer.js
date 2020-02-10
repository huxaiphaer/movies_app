import {AUTO_COMPLETE_INPUT, FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_MOVIE} from "../actions/types";

const initialState = {

    text: '',
    movies :[],
    loading: false,
    movie:[],
    autoCompleteMovies:[]
};


export default function (state = initialState, action) {

    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading:false
            };
        case AUTO_COMPLETE_INPUT:
            return {
                ...state,
                autoCompleteMovies: action.payload,
                loading:false
            };

        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state
    }
}