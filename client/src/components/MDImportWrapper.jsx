import React, { Component } from "react";
import MDImport from "./MDImport";
import SocialMediaShare from "../components/SocialMediaShare";

import { FacebookProvider, Like } from 'react-facebook';

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
                {/* <div class="fb-comments"
                    data-href="https://localhost:3000/ytc-web#/blogs/mogodB/Pretty%20needed%20Chill/61d33d9f69f66a56c65c3486"
                    data-width="" 
                    data-numposts="5"
                ></div> */}
                <FacebookProvider appId="215081200832412">        
                <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
                </FacebookProvider>
                <MDImport title={this.state.title} id={this.state.id} />
            </div>
        );
    }
}

export default MDImportWrapper;