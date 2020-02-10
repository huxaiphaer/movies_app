import React from 'react';
import {shallow} from "enzyme";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {AutoComplete} from "../../containers/AutoComplete";

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Testing AutoComplete Component', () =>{


    beforeEach(() => {
        const initialState ={
            text:""
        };
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
});