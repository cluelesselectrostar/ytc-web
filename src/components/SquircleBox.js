
import React, { Component } from "react";

class SquircleBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div class="h-100 p-5 bg-light border rounded-3">
                <div>this.props.content</div>
            </div>
        );
    }

}

export default SquircleBox;

