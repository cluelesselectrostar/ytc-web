import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function BlogPostList({ posts }) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className="row g-3 mt-4">
                {posts.map(post => (
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="card shadow-sm" style={{ height: 600 }}>
                            <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />
                            <div className="card-body">
                                <h3> {post.title}</h3>
                                <p className="card-text">{post.description}</p>
                                <div className="row d-flex justify-content-between align-items-center" style={{ position: "absolute", bottom: 20, justifyContent: 'center' }}>
                                    {post.markdown === "" ?
                                        (
                                            <div className="btn-group col-md-6">
                                                <a className="btn btn-sm btn-outline-secondary" href={post.link}>Medium</a>
                                            </div>
                                        ) : (
                                            <div className="btn-group col-md-6">
                                                <Link to={`/blogs/mogodB/${post.title}/${post._id}`} className="btn btn-sm btn-outline-secondary" onClick={scrollToTop}> Read </Link>
                                                <a className="btn btn-sm btn-outline-secondary" href={post.link}>Medium</a>
                                            </div>
                                        )
                                    }
                                    <div className="col-md-5">
                                        <small className="text-muted">Published on {post.date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
