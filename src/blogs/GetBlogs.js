import React, { Component, createRef } from "react";
import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'

import Collapsible from 'react-collapsible';

//import MDImport from './MDBlogImport.js';
import HTMLBlogImport from './HTMLBlogImport.js';
import SquircleBox from '../components/SquircleBox.js';
import projects from './Blogs_List.js';

import './GetProjects.css'

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
            <div>
                <SquircleBox
                    appearance="bordered-grey"
                    content={
                        <Collapsible
                            trigger={
                                <div class="row justify-content-between">
                                    <div class="col-md-11 col-xs-10">Expand list</div>
                                    <div class="col-md-1 col-xs-2">⬇️</div>
                                </div>
                            }
                            triggerStyle={{ fontSize: 30, fontWeight: "bold" }}
                            triggerWhenOpen={
                                <div class="row justify-content-between">
                                    <div class="col-md-11 col-xs-8">Collapse list</div>
                                    <div class="col-md-1 col-xs-4">⬆️</div>
                                </div>
                            }
                            open="true"
                            triggerSibling="All of my content on Medium and Exposure, last exported in Jul 2021."
                        >
                            <div class="row g-3 mt-4">
                                {
                                    projects.map(
                                        post => (
                                            <div class="col-xs-12 col-md-6 col-lg-4">
                                                <div class="card shadow-sm" style={{ height: 600 }}>

                                                    <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />

                                                    <div class="card-body">
                                                        <h3> {post.title}</h3>
                                                        <p class="card-text">{post.description}</p>

                                                        <div class="row d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20, justifyContent: 'center' }}>
                                                            <div class="btn-group col-md-6">
                                                                 <Link to = {`/blogs/${post.read}`} class="btn btn-sm btn-outline-secondary" onClick={() => this.scrollToTop()}> Read </Link>
                                                                <a class="btn btn-sm btn-outline-secondary" href={post.medium}>Medium</a>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <small class="text-muted">Published on {post.date}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </Collapsible>
                    }
                />
            </div>
        );
    }
}

export default GetBlogs;