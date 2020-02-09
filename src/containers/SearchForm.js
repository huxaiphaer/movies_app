import {Component} from "react";
import React from "react";
import {connect} from "react-redux";
import {searchMovie, fetchMovies, setLoading} from "../actions/searchActions";
import AutoComplete from "./AutoComplete";

export class SearchForm extends Component{


    onChange = e => {
        this.props.searchMovie(e.target.value);
        this.props.fetchMovies(this.props.text)
        this.props.setLoading();
    };

    render() {
        return(
            // <div className="jumbotron jumbotron-fluid mt-5 text-center">
            //     <div className="container">
            //         <h1 className="display-4 mb-3">
            //             <i className="fa fa-search" /> Search for a movie
            //         </h1>
            //         <form id="searchForm">
            //             <input
            //                 type="text"
            //                 className="form-control"
            //                 name="searchText"
            //                 placeholder="Search Movies"
            //                 onChange={this.onChange}
            //             />
            //         </form>
            //     </div>
            // </div>
            <AutoComplete/>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})


export default connect(mapStateToProps,{searchMovie, fetchMovies, setLoading})(SearchForm)