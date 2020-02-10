import React from 'react';
import {shallow,mount} from "enzyme";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {SearchForm} from "../../containers/SearchForm";
import {mapStateToProps} from "../../containers/SearchForm";
import {AutoComplete} from "../../containers/AutoComplete";
import {searchAutoCompleteMovies, searchMovie} from "../../actions/searchActions";

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Testing AutoComplete Component', () =>{


    beforeEach(() => {
        const initialState ={
            text:""
        }
        store = mockStore(initialState);

        wrapper = shallow(
            <AutoComplete
                store={store}
                searchAutoCompleteMovies={jest.fn}
                searchMovie={jest.fn}
                autoCompleteMovies={[]}

            />
        );
    });

    it('should render AutoComplete component', () => {

        wrapper = shallow(
            <AutoComplete
                store={store}
                searchAutoCompleteMovies={jest.fn}
                searchMovie={jest.fn}
                autoCompleteMovies={[]}
                onChange={jest.fn()}

            />
        );

    })
})