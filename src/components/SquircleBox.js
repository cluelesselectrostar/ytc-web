import React, { Component } from "react";
import './Squirclebox.css';

class SquircleBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        if (this.props.appearance == "teal") {
            return (
                <div class="h-100 p-5 text-white rounded-3 " style={{ backgroundColor:'teal'}}>
                    <h2>{this.props.title}</h2>
                    <div>{this.props.content}</div>
                </div>
            );
        } else if (this.props.appearance == "dark") {
            return (
                <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'rgb(51,51,51)'}}>
                    <h2>{this.props.title}</h2>
                    <div>{this.props.content}</div>
                </div>
            );
        } else if (this.props.appearance == "bordered-grey") {
            return (
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>{this.props.title}</h2>
                    <div>{this.props.content}</div>
                </div>
            );
        } else { // "grey" - grey without border
            return (
                <div class="h-100 p-5 bg-light rounded-3">
                    <h2>{this.props.title}</h2>
                    <div>{this.props.content}</div>
                </div>
            );
        }
    }

}

export default SquircleBox;