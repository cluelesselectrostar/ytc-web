
import React, { Component } from "react";

class TitleBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div class="align-items-md-stretch h-100 p-5 bg-light rounded-3">
                <div class="col-md-8">
                    <h1 class="display-5 fw-bold">{this.props.title}</h1>
                    <p class="lead">
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }

}

export default TitleBanner;