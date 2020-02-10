import React from 'react';
import {shallow,mount} from "enzyme";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {SearchForm} from "../../containers/SearchForm";
import {mapStateToProps} from "../../containers/SearchForm";

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Testing Search Form Component', () =>{


    beforeEach(() => {
        const initialState ={
            text:""
        }
        store = mockStore(initialState);

        wrapper = shallow(
                    <SearchForm
                        store={store}
                        fetchMovies={jest.fn}
                        setLoading={jest.fn}

                    />
        );
    });

    it('should render Search Form component text', () => {

        expect(wrapper.props().text).toBe(undefined);
        wrapper.instance().onSubmit({preventDefault: jest.fn});
    })
})