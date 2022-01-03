import React from 'react';
import Image from 'react-bootstrap/Image'
import Markdown from 'markdown-to-jsx';
import Caption from './caption';

import md from './test_reactmarkdown';

import './../HTMLBlogImport.css';

function MDImport() {

    const myH1 = ({ children, ...props }) => (
        <h1 {...props} class="cust-title mt-3 mb-3 display-4">{children}</h1>
    );

    const myH2 = ({ children, ...props }) => (
        <h2 {...props} class="cust-h3 mt-3 mb-6 display-5">{children}</h2>
    );

    const myH3 = ({ children, ...props }) => (
        <h3 {...props} class="cust-h4 mb-3 mt-4 display-6">{children}</h3>
    );

    const myP = ({ children, ...props }) => (
        <div class="cust mt-3 mb-3" style={{ display: 'flex', justifyContent: 'center' }} {...props}>
            {children}
        </div>
    );

    const myLi = ({ children, ...props }) => (
        <li class="cust" {...props}>
            {children}
        </li>
    );


    const myImage = ({ children, ...props }) => (
        <div class="mt-3" style={{ display: 'flex', justifyContent: 'center' }} {...props}>
            <Image src={props.src} alt="Photo" fluid />
        </div >
    );

    const myA = ({ children, ...props }) => (
        <a class="cust" {...props}>
            {children}
        </a>
    );

    const myBlockquote = ({ children, ...props }) => (
        <div class="mt-3 mb-3 display-6" style={{ display: 'flex', justifyContent: 'center' }} {...props}>
            {children}
        </div>
    ); 

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} class="container d-flex py-4 col-md-10 col-lg-8">
            <Markdown options={{
                wrapper: 'article',
                forceBlock: true,
                overrides: {
                    h1: myH1,
                    h2: myH2,
                    h3: myH3,
                    img: myImage,
                    p: myP,
                    a: myA,
                    li: myLi,                   
                    blockquote: myBlockquote, // does not work
                    Caption: {
                        component: Caption,
                    }
                }
            }}
            >{md}</Markdown>
        </div>
    );
}

export default MDImport;