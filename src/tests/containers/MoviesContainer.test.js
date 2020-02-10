import React from 'react';
import {shallow} from "enzyme";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {MoviesContainer} from "../../containers/MoviesContainer";

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Testing Movie Container Component', () => {


    beforeEach(() => {
        store = mockStore({});
    });

    it('should render movie container component', () => {

        wrapper = shallow(
            <MoviesContainer  store={store}
                              movies={[{ _id: '1', title: 'Item 1' },
                                  { _id: '2', title: 'Item 2' }]}
            />
        );
        expect(wrapper.find('MovieCard')).toHaveLength(2);
    })

    it('should return null when the movies list is null', () => {

        wrapper = shallow(
            <MoviesContainer  store={store}
                              movies={[]}
            />);

        expect(wrapper.find('MovieCard')).toHaveLength(0);

    })
})