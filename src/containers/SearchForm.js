import {Component} from "react";
import React from "react";
import {searchMovie} from "../actions/searchActions";
import {connect} from "react-redux";

export class SearchForm extends Component{


    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    render() {
        return(
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a movie
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies"
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps,{searchMovie})(SearchForm)