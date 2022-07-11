import React from 'react';
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
}
