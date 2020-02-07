import React, {Component} from "react";
import {SearchForm} from "./SearchForm";

export class Landing extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <SearchForm store={this.props}/>
            </div>
        );
    }
}