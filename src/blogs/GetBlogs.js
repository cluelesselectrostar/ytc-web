import React, { Component } from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import MDImport from './BlogImport.js';
import HTMLBlogImport from './HTMLBlogImport.js';

import projects from './Blogs_List.js';
import './GetProjects.css'

class GetBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projects
        };
    }

    render() {
        const { projects } = this.state;
        return (
            // <div class="row g-3">
            //     {
            //         projects.map(post => (
            //             <div class="col-xs-12 col-md-6 col-lg-4">
            //                 <div class="card shadow-sm" style={{ height: 600 }}>

            //                     <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />

            //                     <div class="card-body">
            //                         <h3> {post.title}</h3>
            //                         <p class="card-text">{post.description}</p>
            //                         <div class="d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20 }}>
            //                             <p>
            //                                 <div class="btn-group">
            //                                     <a class="btn btn-sm btn-outline-secondary">
            //                                         <BlogImport path={post.read} />
            //                                         <HashRouter>
            //                                             <Link to="/ytc-web/blogs/{post.read}" class="text-decoration-none text-dark"> Read</Link>
            //                                             <BlogImport path={post.read} />
            //                                         </HashRouter>
            //                                     </a>
            //                                     <a class="btn btn-sm btn-outline-secondary" href={post.medium}>Medium</a>
            //                                 </div>
            //                             </p>
            //                             <p style={{ marginLeft: 70 }}>
            //                                 <small class="text-muted">{post.date}</small>
            //                             </p>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         ))
            //     }
            // </div>
            //<MDImport require_name='./archive/ffestiniog.md'/>
            <HTMLBlogImport filename = "./posts/2020-03-03_Ffestiniog-and-Welsh-Highlands-Heritage-Railways-Winter-Volunteering-Trip-dc2db75ab144.html"/>
            //<div></div>
        );
    }
}

export default GetBlogs;
