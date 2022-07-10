import React from 'react';
import Image from 'react-bootstrap/Image';
import FadeIn from "react-lazyload-fadein";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectPostCard from './ProjectPostCard';

export default function ProjectPostList({ posts }) {
    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} className="mt-4"
            >
                <Masonry gutter={16}>
                    {posts.map(post => (
                        <ProjectPostCard post={post}/>

                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );

    /*                                 <div className="col-xs-12 col-md-6 col-lg-4" onLoad={onload}>
                            <div className="card shadow-sm" style={{ height: 550 }}>
                                <Image src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h3> {post.title}</h3>
                                    <p className="card-text" style={{ textOverflow: "ellipsis" }}>{post.description}</p>
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
                        </div> */
}
