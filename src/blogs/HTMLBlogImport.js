import React, { Component } from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

class HTMLBlogImport extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        const cleanHTML = DOMPurify.sanitize(require(`${this.props.filename}`), {
            USE_PROFILES: { html: true },
        });
    
        return (
            <div>{parse(cleanHTML)}</div>
        );
    }

}

export default HTMLBlogImport;