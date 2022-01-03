
import React, { Component } from "react";

class Caption extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div>
                <p class="cust-caption mt-2 mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
                    {this.props.text}
                </p>
            </div>
        );
    }

}

export default Caption;