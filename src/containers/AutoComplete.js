import React , {Component} from "react";
import Autosuggest from 'react-autosuggest';
import {connect} from "react-redux"
import {searchAutoCompleteMovies, searchMovie} from "../actions/searchActions";

export class AutoComplete extends Component{

    constructor(props) {
        super(props);
        this.state = {
            movie: "",
            suggestions :[]
        };
    }

    render() {
        let {autoCompleteMovies} = this.props

        return (
            <div>
                <Autosuggest
                    inputProps={{
                        placeholder : "SEARCH YOUR FAVORITE MOVIE",
                        autoComplete :"",
                        name:"movies",
                        id:"movies",
                        value:this.state.movie,
                        onChange:(_event, {newValue})=>{
                            this.setState({movie:newValue})
                            this.props.searchMovie(newValue);
                        }

                    }}
                    suggestions ={this.state.suggestions}
                    onSuggestionsFetchRequested={async ({value}) => {

                        if(!value){
                            this.setState({suggestions:[]})
                            return;
                        }
                        try {

                            this.props.searchAutoCompleteMovies(value);
                            this.setState({suggestions: autoCompleteMovies.map(row =>({
                                    name:row.original_title
                                }))})
                        }
                        catch (e) {
                            this.setState({suggestions:[]})
                        }

                    }}

                    onSuggestionsClearRequested = {() => {
                        this.setState({suggestions:[]})
                    }}

                    getSuggestionValue={suggestion=> suggestion.name}
                    renderSuggestion={suggestion => <div>{suggestion.name}</div>}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text,
    autoCompleteMovies: state.movies.autoCompleteMovies
})

export default connect(mapStateToProps, { searchAutoCompleteMovies, searchMovie})(AutoComplete)