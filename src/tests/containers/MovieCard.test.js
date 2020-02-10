import React from 'react';
import {shallow, mount} from "enzyme";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import MovieCard from "../../containers/MovieCard";

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Testing Movie Card Component', () =>{


    beforeEach(() => {
        store = mockStore({
        });

        wrapper = shallow(
                    <MovieCard
                        store={store}
                        movie={{poster_path:""}}
                        IMG_PATH={""}
                    />
        );
    });

    it('should render movie card component', () => {

        wrapper = shallow(
                    <MovieCard
                        store={store}
                        movie={{poster_path:""}}
                        IMG_PATH={""}
                    />
        );

    })
})