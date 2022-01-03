import ReactMarkdown from "react-markdown";
import React from 'react';
import md from '../test_reactmarkdown';


function ReactMarkdown_Render() {

    return (
        <div>
            <h1>Test 1</h1>
            <ReactMarkdown children={md} />
        </div>
    );
}

export default ReactMarkdown_Render;