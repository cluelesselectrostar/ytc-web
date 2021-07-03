import React, { useState, useEffect, Component} from 'react';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./blogs', true, /\.md$/))
    .sort()
    .reverse();

class BlogImport extends Component {
    state = {
        posts: [],
    }

    async componentDidMount() {
        const posts = await Promise.all(
            markdownFiles
                .map((file) => fetch(file)
                    .then((res) => res.text())
                ))
            .catch((err) => console.error(err));

        this.setState((state) => ({ ...state, posts }));
    }

    render() {
        /* eslint-disable react/no-array-index-key */
        const { posts } = this.state;

        return (
            <div>
                {
                    posts.map((post) => (
                        <div class="card shadow-sm" style={{ height: 600 }}>
                            <div class="card-body">
                                <ReactMarkdown source={post} />
                            </div>
                        </div>
                    ))
                }
            </div>
        );
        /* eslint-enable react/no-array-index-key */
    }
}

export default BlogImport;