import {SEARCH_MOVIE} from "../../actions/types";
import searchReducer from "../../reducers/searchReducer";

describe('Search Movie reducers', () => {

    it('should test add one article reducer', () => {
        const initialState = {
            text: '',
            movies :[],
            loading: false,
            movie:[],
            autoCompleteMovies:[]
        };
        const expected =   {
            "autoCompleteMovies": [],
            "loading": false,
            "movie": [],
            "movies": [],
            "text": {}
        }
        const action = {type: SEARCH_MOVIE, payload: {}};

        expect(searchReducer(initialState, action)).toEqual(expected);
    });

});