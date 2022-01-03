import React, { Component } from "react";
import MDImport from "./MDImport";

import SocialMediaShare from "../components/SocialMediaShare";

class MDImportWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            id: "",
        };
    }

    componentDidMount() {
        // Decoding from parameters passed from router
        const title = decodeURIComponent(this.props.match.params.title);
        const id = decodeURIComponent(this.props.match.params._id);
        this.setState({
            title: title,
            id: id
        })
    }

    tryRequire = (path) => {
        try {
            return require(`${path}`);
        } catch (err) {
            return null;
        }
    };

    render() {
        return (
            <div>
                <div class="container col-md-10 col-lg-8 cust-title mt-3 mb-3 display-4">
                    <SocialMediaShare link={this.props.location.pathname} />
                </div>
                <MDImport title={this.state.title} id={this.state.id} />
            </div>
        );
    }
}

export default MDImportWrapper;