import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from 'react-image-and-background-image-fade';
import shuffle from "../components/Shuffle";

function WoodstockMasonry({ postdata }) {

    const [images, setImages] = useState([]);

    useEffect(() => {

        var image_list = [];
        for (const post of postdata) {
            image_list.push(post.image);
        }

        shuffle(image_list);

        console.log(image_list);
        setImages(image_list);

    }, [postdata]);

    return (
        <div>
            {images.length === 0 ? (
                <div></div>
            ) : (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter={16}>
                        {images.map(url => (
                            <Image src={url} rounded />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            )}
        </div>
    )
}

export default WoodstockMasonry;