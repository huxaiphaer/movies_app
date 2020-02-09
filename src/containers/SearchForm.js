import React, { Component } from 'react';

import { connect } from 'react-redux';

import AutoComplete from "./AutoComplete";
import {fetchMovies, searchMovie, setLoading} from "../actions/searchActions";

export class SearchForm extends Component {

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a Movie
                    </h1>
                        <AutoComplete/>
                        <button onClick={this.onSubmit} className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies, setLoading }
)(SearchForm);