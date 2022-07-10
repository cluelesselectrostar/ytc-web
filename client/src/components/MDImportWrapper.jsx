import React from "react";
import MDImport from "./MDImport";
import SocialMediaShare from "../components/SocialMediaShare";
import { useParams } from 'react-router-dom';

import FaceBookComment from "./FacebookComment";

function MDImportWrapper({url}) {

    let { title } = useParams(); 
    let { _id } = useParams(); 

    return (
        <div>
            <div className="container col-md-10 col-lg-8 cust-title mt-3 mb-3 display-4">
                <SocialMediaShare link={"https://yannichau.github.io/ytc-web/#" + url} />
            </div>
            <MDImport title={title} id={_id} />
            <FaceBookComment url={"https://yannichau.github.io/ytc-web/#" + url} />
        </div>
    );
}

export default MDImportWrapper;