import React , {Component} from "react";
import Autosuggest from 'react-autosuggest';
import {connect} from "react-redux"
import {searchAutoCompleteMovies, searchMovie} from "../actions/searchActions";
import "../styles/AutoComplete.css"

export class AutoComplete extends Component{

    constructor(props) {
        super(props);
        this.state = {
            movie: "",
            suggestions :[]
        };
    }

    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }

     renderSectionTitle(section) {
        return (
            <strong>{section.title}</strong>
        );
    }

    render() {
        let {autoCompleteMovies} = this.props

        return (
            <div>
                <Autosuggest
                    inputProps={{
                        placeholder : "Search Your Favorite Movie",

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
                    renderSuggestion={suggestion =>
                        <span>
                            {suggestion.name}
                        </span>
                    }
                    renderSectionTitle ={
                        suggestion =>
                            <span>
                            {suggestion.release_date}
                        </span>
                    }
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