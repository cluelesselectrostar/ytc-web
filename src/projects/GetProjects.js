import React, { Component } from 'react';

import projects from './Projects_List.js';
// import './GetProjects.css'

class GetLocalProjects extends Component {
    constructor(props){
        super(props);
        this.state = {            
            projects :projects            
        };
    }

    render() {
        const {projects} = this.state;
        return(
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    projects.map(post => (
                        <div class="col">
                            <div class="card shadow-sm"  style={{height:500}}>
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                <div class="card-body">
                                    <h3> {post.title}</h3>
                                    <p class="card-text">{post.body}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-muted">{post.date}</small>
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
