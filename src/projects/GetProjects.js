import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

import projects from './Projects_List.js';
import './GetProjects.css'

class GetLocalProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projects
        };
    }

    render() {
        const { projects } = this.state;
        return (
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    projects.map(post => (
                        <div class="col">
                            <div class="card shadow-sm" style={{ height: 600 }}>
                                {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

                                <Image src={(post.image)} style={{ width: "100%", height: 300, overflow: "hidden", objectFit: "cover" }} />

                                <div class="card-body">
                                    <h3> {post.title}</h3>
                                    <p class="card-text">{post.body}</p>
                                    <div class="d-flex justofy-content-between align-items-center" style={{ position: "absolute", bottom: 20 }}>
                                        <div class="col-md-7">
                                            <div class="btn-group">
                                                <a class="btn btn-sm btn-outline-secondary" href={post.repo}>Repo</a>
                                                <a class="btn btn-sm btn-outline-secondary" href={post.report}>Report</a>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <small class="text-muted">{post.date}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default GetLocalProjects;
