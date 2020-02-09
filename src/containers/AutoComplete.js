import React , {Component} from "react";
import Autosuggest from 'react-autosuggest';


export class AutoComplete extends Component{

    constructor(props) {
        super(props);
        this.state = {
            movie: "hey",
            suggestions :[]
        };
    }

    render() {
        return (
            <div>
                <label htmlFor="movies" > Country</label>
                <Autosuggest
                    inputProps={{
                        placeholder : "SEARCH YOUR FAVORITE MOVIE",
                        autoComplete :"abc",
                        name:"movies",
                        id:"movies",
                        value:this.state.movie
                    }}
                    suggestions ={this.state.suggestion}
                />
            </div>
        );
    }
}

export default AutoComplete