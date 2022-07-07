import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import DOMPurify from "dompurify";
import parse, { domToReact } from 'html-react-parser';
import './BlogImport.css';

import PageTitle from "../components/PageTitle";
import SocialMediaShare from "../components/SocialMediaShare";
import FaceBookComment from "../components/FacebookComment";

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
        const title_url = title.replace(/ /g, "%20");
        const url = "https://cluelesselectrostar.github.io/ytc-web/#/blogs/static/" + title_url + "/" + post;
        if (title === "") {
            return <br></br>
        } else {

            if (this.tryRequire(`./posts/${title}`)) {
                const cleanHTML = DOMPurify.sanitize(require(`./posts/${title}`), {
                    USE_PROFILES: { html: true },
                });

                // PARSER        
                const options = {
                    replace: node => {
                        if (!node.attribs) {
                            return;
                        }
                        if (node.attribs.class === "imageCaption") {
                            return (
                                <p className="cust-caption" style={{ display: 'flex', justifyContent: 'center' }}>
                                    {domToReact(node.children, options)}
                                </p>
                            );
                        } else if (String(node.attribs.class).includes("section-inner")) {
                            return (
                                <div className="row align-items-md-stretch" style={{ display: 'flex', justifyContent: 'center' }}>
                                    {domToReact(node.children, options)}
                                </div>
                            );
                        } else if (node.attribs.class === "graf-image") {
                            return (
                                <div className="align-content-center align-items-center mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={node.attribs.src} alt="Photo" fluid />
                                </div >
                            );
                        } else if (node.attribs.class === "p-name") {
                            return <div></div>;
                        } else if (node.attribs.class === "p-summary") {
                            return <div></div>;
                        } else if (node.attribs.class === "section-divider") {
                            return <br></br>;
                        } else if (String(node.attribs.class).includes("graf--p")) {
                            return (
                                <div className="col-md-10 col-lg-8 cust mt-3 mb-3">
                                    {domToReact(node.children, options)}
                                </div>
                            );
                        } else if (String(node.attribs.class).includes("graf--blockquote")) {
                            return (
                                <div className="col-md-10 col-lg-8 cust mt-4 mb-4 blockquote">
                                    {domToReact(node.children, options)}
                                </div>
                            );
                        } else if (String(node.attribs.class).includes("graf--title")) {
                            /* return (
                                <div className="col-md-10 col-lg-8  cust-title mt-3 mb-3 display-4">
                                    {domToReact(children, options)}
                                </div>
                            ); */
                            return (<div></div>);
                        } else if (String(node.attribs.class).includes("graf--h3")) {
                            return (
                                <div className="col-md-10 col-lg-8  cust-h3 mt-3 mb-6 display-5">
                                    {domToReact(node.children, options)}
                                </div>
                            );
                        } else if (String(node.attribs.class).includes("graf--h4")) {
                            return (
                                <div className="col-md-10 col-lg-8  cust-h4 mb-3 mt-4 display-6">
                                    {domToReact(node.children, options)}
                                </div>
                            );
                        } else if (String(node.attribs.class).includes("postList")) {
                            return (
                                <div className="col-md-10 col-lg-8  cust mt-4 mb-4">
                                    {domToReact(node.children, options)}
                                </div>
                            );
                        } else if (node.name === "a") {
                            return (<a href={node.attribs.href} className="text-dark">{domToReact(node.children, options)}</a>);
                        } else if (node.name === "footer") {
                            return (<br></br>)
                        }
                    }
                };
                return (
                    <div>
                        <PageTitle title={`Blog | ${post}`} />
                        <br></br>
                        <div className="container col-md-10 col-lg-6 cust-title mt-3 mb-3 display-4">
                            <div>{post}</div>
                            <SocialMediaShare link={this.props.location.pathname} />
                        </div>
                        <div className="container col-md-10 col-lg-8">
                            {parse(cleanHTML, options)}
                        </div>

                        <br></br>
                        <FaceBookComment url={url}/>
                        
                    </div >
                );
            } else {
                return (
                    <div>
                        <PageTitle title={`Blog | Error`} />
                        <h1 className="px-10 py-0 my-5 text-center">This blog post does not seem to exist.</h1>
                    </div>
                );
            }
        }

    }

}

export default HTMLBlogImport;