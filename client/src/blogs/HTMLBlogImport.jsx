import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import DOMPurify from "dompurify";
import parse, { domToReact } from 'html-react-parser';
import './BlogImport.css';

import PageTitle from "../components/PageTitle";
import SocialMediaShare from "../components/SocialMediaShare";


class HTMLBlogImport extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    tryRequire = (path) => {
        try {
            return require(`${path}`);
        } catch (err) {
            return null;
        }
    };


    render() {
        const title = decodeURIComponent(this.props.match.params.title);
        const post = decodeURIComponent(this.props.match.params.post);
        if (title === "") {
            return <br></br>
        } else {

            if (this.tryRequire(`./posts/${title}`)) {
                const cleanHTML = DOMPurify.sanitize(require(`./posts/${title}`), {
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
                                <p class="cust-caption" style={{ display: 'flex', justifyContent: 'center' }}>
                                    {domToReact(children, options)}
                                </p>
                            );
                        } else if (String(attribs.class).includes("section-inner")) {
                            return (
                                <div class="row align-items-md-stretch" style={{ display: 'flex', justifyContent: 'center' }}>
                                    {domToReact(children, options)}
                                </div>
                            );
                        } else if (attribs.class === "graf-image") {
                            return (
                                <div class="align-content-center align-items-center mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={attribs.src} alt="Photo" fluid />
                                </div >
                            );
                        } else if (attribs.class === "p-name") {
                            return <div></div>;
                        } else if (attribs.class === "p-summary") {
                            return <div></div>;
                        } else if (attribs.class === "section-divider") {
                            return <br></br>;
                        } else if (String(attribs.class).includes("graf--p")) {
                            return (
                                <div class="col-md-10 col-lg-8 cust mt-3 mb-3">
                                    {domToReact(children, options)}
                                </div>
                            );
                        } else if (String(attribs.class).includes("graf--blockquote")) {
                            return (
                                <div class="col-md-10 col-lg-8 cust mt-4 mb-4 blockquote">
                                    {domToReact(children, options)}
                                </div>
                            );
                        } else if (String(attribs.class).includes("graf--title")) {
                            /* return (
                                <div class="col-md-10 col-lg-8  cust-title mt-3 mb-3 display-4">
                                    {domToReact(children, options)}
                                </div>
                            ); */
                            return (<div></div>);
                        } else if (String(attribs.class).includes("graf--h3")) {
                            return (
                                <div class="col-md-10 col-lg-8  cust-h3 mt-3 mb-6 display-5">
                                    {domToReact(children, options)}
                                </div>
                            );
                        } else if (String(attribs.class).includes("graf--h4")) {
                            return (
                                <div class="col-md-10 col-lg-8  cust-h4 mb-3 mt-4 display-6">
                                    {domToReact(children, options)}
                                </div>
                            );
                        } else if (String(attribs.class).includes("postList")) {
                            return (
                                <div class="col-md-10 col-lg-8  cust mt-4 mb-4">
                                    {domToReact(children, options)}
                                </div>
                            );
                        } else if (attribs.name === "footer") {
                            return (<div></div>);
                        }
                    }
                };
                return (
                    <div>
                        <PageTitle title={`Blog | ${post}`} />
                        <br></br>
                        <div class="container col-md-10 col-lg-6 cust-title mt-3 mb-3 display-4">
                            <div>{post}</div>
                            <SocialMediaShare link={this.props.location.pathname}/>
                        </div>
                        <div class="container col-md-10 col-lg-8">
                            {parse(cleanHTML, options)}
                        </div>
                    </div >
                );
            } else {
                return (
                    <div>
                        <PageTitle title={`Blog | Error`} />
                        <h1 class="px-10 py-0 my-5 text-center">This blog post does not seem to exist.</h1>
                    </div>
                );
            }
        }

    }

}

export default HTMLBlogImport;