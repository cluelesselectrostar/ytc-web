import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { useEffect, useState } from "react";
import localPosts from '../blogs/HTMLBlogsList';
import BlogCard from './BlogCard';
import shuffle from './Shuffle';

export default function BlogPostList({ mdPosts }) {

    const [loadedPosts, setLoadedPosts] = useState([]);

    useEffect(() => {
        const allPosts = mdPosts.concat(localPosts);
        shuffle(allPosts);
        setLoadedPosts(allPosts);
    }, [mdPosts]);

    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} className="mt-4"
            >
                <Masonry gutter={16}>
                    {
                        loadedPosts.map(
                            post => (
                                <>{post._id ? (
                                    <BlogCard post={post} isLocal={false} />
                                ) : (
                                    <BlogCard post={post} isLocal={true} />
                                )}
                                </>
                            )
                        )
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div >
    );
}
