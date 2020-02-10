import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import {APIKey, LANGUAGE, URL} from "../../utils/ApiKey";
import {fetchMovie, fetchMovies, searchAutoCompleteMovies} from "../../actions/searchActions";

const mockStore = configureStore([thunk]);
let store = {};

describe('Search Actions', () => {

    beforeEach(() => {
        moxios.install();
        store = mockStore({});
    });

    afterEach(() => {
        moxios.uninstall();
    });



    it('should test fetch movies ', () => {
        moxios.wait(`${ URL }/3/search/movie/?api_key=${ APIKey }&language=${ LANGUAGE }
        &query=gemini`, {
            status: 200,
            data: {results: [{id:1, name:'gemini'},{id:2, name:'gemini 2'}]}
        });

        const expectedActions = [
            {'isRequestLoading': true, 'type': 'REQUEST_LOADING'},
            {'isRequestLoading': false, 'type': 'REQUEST_LOADING'}
        ];

        store.dispatch(fetchMovies('gemini'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('should test fetch a single movie ', () => {
        moxios.wait(`${ URL }/3/movie/2?api_key=${ APIKey }&language=${ LANGUAGE }`, {
            status: 200,
            data: {results: [{id:1, name:'gemini'},{id:2, name:'gemini 2'}]}
        });

        const expectedActions = [
            {'isRequestLoading': true, 'type': 'REQUEST_LOADING'},
            {'isRequestLoading': false, 'type': 'REQUEST_LOADING'}
        ];

        store.dispatch(fetchMovie('2'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('should test for search auto-complete movies', () => {
        moxios.wait(`${ URL }/3/search/movie/?api_key=${ APIKey }&language=${ LANGUAGE }
    &query=gemini`, {
            status: 200,
            data: {results: [{id:1, name:'gemini'},{id:2, name:'gemini 2'}]}
        });

        const expectedActions = [
            {'isRequestLoading': true, 'type': 'REQUEST_LOADING'},
            {'isRequestLoading': false, 'type': 'REQUEST_LOADING'}
        ];

        store.dispatch(searchAutoCompleteMovies('gemini'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });


});
