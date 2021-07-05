

import React, { Component, useState, useEffect } from 'react';
import AppMarkdown from '!!html-loader!./ffestiniog.md';
import ReactMarkdown from 'react-markdown';

/*
class BlogImport extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} />;
  }
}
*/

function BlogImport() {

    // const file_name = './Blogging/blogs/example-blog/template.md';
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
        <div class="align-items-md-stretch h-100 p-5">
            <ReactMarkdown remarkPlugins={[gfm]} children={post} />
        </div>
    );
    

    //return{ __html: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello'};

}

export default BlogImport;
