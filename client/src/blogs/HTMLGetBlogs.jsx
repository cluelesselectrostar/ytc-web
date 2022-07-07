import React, { Component, createRef } from "react";
import { Link } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'

//import Collapsible from 'react-collapsible';
//import MDImport from './MDBlogImport.js';
//import HTMLBlogImport from './HTMLBlogImport.js';
//import SquircleBox from '../components/SquircleBox'
import projects from './HTMLBlogsList';

import './HTMLGetBlogs.css'

class GetBlogs extends Component {
    constructor(props) {
        super(props);
        this.scrollDiv = createRef();
        this.state = {
            projects: projects,
            article: "",
        };
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };

    render() {
        const { projects } = this.state;

        return (
            <div className="row g-3 mt-4">
                {
                    projects.map(
                        post => (
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="card shadow-sm" style={{ height: 600 }}>

                                    <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />

                                    <div className="card-body">
                                        <h3> {post.title}</h3>
                                        <p className="card-text">{post.description}</p>

                                        <div className="row d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20, justifyContent: 'center' }}>
                                            <div className="btn-group col-md-6">
                                                <Link to={`/blogs/static/${post.title}/${post.read}`} className="btn btn-sm btn-outline-secondary" onClick={() => this.scrollToTop()}> Read </Link>
                                                <a className="btn btn-sm btn-outline-secondary" href={post.medium}>Medium</a>
                                            </div>
                                            <div className="col-md-6">
                                                <small className="text-muted">Published on {post.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default GetBlogs;