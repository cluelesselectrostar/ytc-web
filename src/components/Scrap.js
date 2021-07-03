import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../blogs', true, /\.md$/))
    .sort()
    .reverse();

class WhatsNew extends Component {
    state = {
        posts: [],
    }

    async componentDidMount() {
        const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
            .catch((err) => console.error(err));

        this.setState((state) => ({ ...state, posts }));
    }

    render() {
        /* eslint-disable react/no-array-index-key */
        const { posts } = this.state;

        return (
            <div>
                <Fragment>
                    <Helmet title="What's New" />
                    <section className="hero">
                        ... title stuff
                    </section>
                    <section className="section">
                        <div className={`container`}>
                            {
                                posts.map((post, idx) => (
                                    <div className="card" key={idx}>
                                        <div className="card-content">
                                            <div className="content">
                                                <ReactMarkdown source={post} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </Fragment>
            </div>
        );
        /* eslint-enable react/no-array-index-key */
    }
}

export default WhatsNew;

// webpack --config webpack.config.js && 
// "webpack": "^5.42.0"

/* const test_input = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
` */