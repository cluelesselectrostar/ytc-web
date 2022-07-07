import React from 'react';
import Image from 'react-bootstrap/Image';

export default function ProjectPostList({ posts }) {
    return (
        <div className="row g-3">
            {posts.map(post => (
            <div className="col-xs-12 col-md-6 col-lg-4">
                <div className="card shadow-sm" style={{ height: 600 }}>
                    <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />
                    <div className="card-body">
                        <h3> {post.title}</h3>
                        <p className="card-text">{post.description}</p>
                        <div className="row d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20, justifyContent: 'center' }}>
                            <div className="btn-group col-md-6">
                                <a className="btn btn-sm btn-outline-secondary" href={post.repo}>Repo</a>
                                <a className="btn btn-sm btn-outline-secondary" href={post.report}>Report</a>
                            </div>
                            <div className="col-md-5">
                                <small className="text-muted">Published on {post.date}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
