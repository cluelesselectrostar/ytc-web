
import React, { Component } from "react";
import { Helmet } from 'react-helmet';

class PageTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <Helmet>
                <title>YTC | {this.props.title}</title>
            </Helmet>
        );
    }

}

export default PageTitle;