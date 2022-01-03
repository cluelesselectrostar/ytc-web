import React, { Component, createRef } from "react";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

import './GetProjects.css'

class GetMDTest extends Component {
    constructor(props) {
        super(props);
        this.scrollDiv = createRef();
        this.state = {
            article: "",
        };
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };

    render() {
        return (
            <div class="row g-3 mt-4">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card shadow-sm" style={{ height: 600 }}>
                        <Image style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />
                        <div class="card-body">
                            <h3>Test Blog</h3>
                            <p class="card-text">A quick blog, written with markdown. The article is rendered using a markdown to jsx package.</p>

                            <div class="row d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20, justifyContent: 'center' }}>
                                <div class="btn-group col-md-6">
                                    <Link to={`/blogs/md/test.md`} class="btn btn-sm btn-outline-secondary" onClick={() => this.scrollToTop()}> Read </Link>
                                    <a class="btn btn-sm btn-outline-secondary">Disabled</a>
                                </div>
                                <div class="col-md-6">
                                    <small class="text-muted">Published on 2022-01-03</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetMDTest;