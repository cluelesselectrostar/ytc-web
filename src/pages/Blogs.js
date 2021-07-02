import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import TitleBanner from '../components/TitleBanner';

const gfm = require('remark-gfm')


function BlogsPage() {

    const file_name = '../blogs/example-blog/template.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <main>
            <TitleBanner
                title = "Blogs ✍️"
                description = "My personal space for everything!"
            />

            <div class="align-items-md-stretch h-100 p-5">
                <ReactMarkdown remarkPlugins={[gfm]} children={post} />
            </div>

        </main>
    );
}

export default BlogsPage;