import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import DOMPurify from "dompurify";
import parse, { domToReact } from 'html-react-parser';

class HTMLBlogImport extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        if (`${this.props.filename}` === "") {
            return <br></br>
        } else {
            const cleanHTML = DOMPurify.sanitize(require(`${this.props.filename}`), {
                USE_PROFILES: { html: true },
            });

            // PARSER        
            const options = {
                replace: ({ attribs, children }) => {
                    if (!attribs) {
                        return;
                    }
                    if (attribs.class === "imageCaption") {
                        return (
                            <p style={{ fontStyle: 'italic', fontSize: "0.9em" }} style={{display: 'flex', justifyContent: 'center'}}>
                                {domToReact(children, options)}
                            </p>
                        );
                    } else if (String(attribs.class).includes("section-inner")) {
                        return (
                            <div class="row align-items-md-stretch" style={{display: 'flex', justifyContent: 'center'}}>
                                {domToReact(children, options)}
                            </div>
                        );
                    } else if (attribs.class === "graf-image") {
                        return (
                            <div class="align-content-center align-items-center" style={{display: 'flex', justifyContent: 'center'}}>
                                <Image src={attribs.src} alt="Photo" fluid rounded />
                            </div >
                        );
                    } else if (attribs.class === "p-name" || attribs.class === "p-summary") {
                        return <div></div>;
                    } else if (attribs.class === "p-name" || attribs.class === "p-summary") {
                        return <div></div>;
                    }
                }
            };

            return (
                <div>{parse(cleanHTML, options)}</div>
            );
        }

    }

}

export default HTMLBlogImport;
