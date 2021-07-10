import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import domToReact from 'html-react-parser/lib/dom-to-react';

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

        // PARSER        
        const replace = ({ attribs, children }) => {
            if (attribs && attribs.class === "graf-image") {
                return (
                    <div class="align-items-center align-content-center m-auto col-md-8 col-sm-12">
                        <Image src={attribs.src} alt="Photo" fluid rounded />
                    </div >
                );
            }
            if (attribs && (attribs.class === "p-name" || attribs.class === "p-summary")) {
                return <div></div>;
            }
            else if (attribs && (attribs.class === "p-name" || attribs.class === "p-summary")) {
                return <div></div>;
            }
            else if (attribs && attribs.class === "imageCaption") {
                return (
                    <p style={{ fontStyle: 'italic', fontSize: "0.9em" }} class="align-items-center align-content-center m-auto col-md-8 col-sm-12">
                        {domToReact(children)}
                    </p>
                );
            }
        };

        return (
            <div>{parse(cleanHTML, { replace })}</div>
        );
    }

}

export default HTMLBlogImport;
