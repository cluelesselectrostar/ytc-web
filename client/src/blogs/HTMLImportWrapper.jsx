import React from "react";
import HTMLBlogImport from "./HTMLBlogImport";
import { useParams } from 'react-router-dom';

import PageTitle from "../components/PageTitle";
import SocialMediaShare from "../components/SocialMediaShare";
import FaceBookComment from "../components/FacebookComment";

function HTMLImportWrapper({ url }) {

    // title is for indexing
    // post is actual title to be rendered

    let { title } = useParams();
    let { post } = useParams();

    console.log(title);
    console.log(post);
    console.log(url);

    return (
        <div>
            <PageTitle title={`Blog | ${post}`} />
            <div className="container col-md-10 col-lg-8 cust-title mt-3 mb-3 display-4">
                <div>{post}</div>
                <SocialMediaShare link={"https://yannichau.github.io/ytc-web/#" + url} />
            </div>
            <HTMLBlogImport title={title} post={post} />
            <FaceBookComment url={"https://yannichau.github.io/ytc-web/#" + url} />
        </div>
    );
}

export default HTMLImportWrapper;