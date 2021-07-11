import React, { Component } from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
//import MDImport from './MDBlogImport.js';
import HTMLBlogImport from './HTMLBlogImport.js';

import projects from './Blogs_List.js';
import './GetProjects.css'

class GetBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projects,
            article: "",
            expanded:false
        };
    }

    render() {
        const { projects } = this.state;

        const scrollToTop = () => {
            this.setState({expanded: false});
            window.scrollTo({
              top: 0,
            });
          };
        
        //const [expanded, setExpanded] = useState(false);
        //const [article, setArticle] = useState("");

        return (
            //<HashRouter>
            <div>
                {/* <Navbar collapseOnSelectexpand='sm' variant='dark' bg='dark' expanded={this.state.expanded}>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => this.setState({ this.state.exanded: (this.state.expanded?false:true) })} style={{ marginLeft: 10 }} />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mr-auto" style={{ marginLeft: 10 }}>
                            <Nav.Link onClick={scrollToTop}>One</Nav.Link>
                            <Nav.Link onClick={scrollToTop}>Two</Nav.Link>
                            <Nav.Link onClick={scrollToTop}>Three</Nav.Link>
                            <Nav.Link onClick={scrollToTop}>Four</Nav.Link>
                            <Nav.Link onClick={scrollToTop}>Five</Nav.Link>
                            <Nav.Link onClick={scrollToTop}>Six</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar> */}
                <div class="row g-3">
                    {
                        projects.map(
                            post => (
                                <div class="col-xs-12 col-md-6 col-lg-4">
                                    <div class="card shadow-sm" style={{ height: 600 }}>

                                        <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />

                                        <div class="card-body">
                                            <h3> {post.title}</h3>
                                            <p class="card-text">{post.description}</p>
                                            <div class="d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20 }}>
                                                <p>
                                                    <div class="btn-group">
                                                        <a class="btn btn-sm btn-outline-secondary" onClick={() => this.setState({ article: `${post.read}` })}>

                                                            Read

                                                            {/* <MDImport filename="./archive/ffestiniog.md" /> */}
                                                        </a>
                                                        <a class="btn btn-sm btn-outline-secondary" href={post.medium}>Medium</a>
                                                    </div>
                                                </p>
                                                <p style={{ marginLeft: 70 }}>
                                                    <small class="text-muted">{post.date}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <HTMLBlogImport filename={this.state.article} />
            </div>

            //</HashRouter>
        );
    }
}

export default GetBlogs;

/*
<Switch>
                    <Route path="/ytc-web/blogs/{this.state.article}">
                        <HTMLBlogImport filename={this.state.article} />
                    </Route>
                </Switch>
                */
