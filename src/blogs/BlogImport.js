
import React, { useState, useEffect, Component } from 'react';
import ReactMarkdown from 'react-markdown';

class BlogImport extends Component {
    constructor(props) {
        super(props);
        this.state = { post: null};
    }

    
    componentWillMount() {
        fetch(require(this.props.path))
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    post: text
                })
            })
    }
    
    /*
    componentDidMount() {
        import(this.props.path)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(text => this.setState({
                    post: text
                }))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    */

    render() {    
        return (
            <div>
                <ReactMarkdown source={this.state.post} />
            </div>
        );
    }
}

/*
function BlogImport(path) {

    const file_name = path;
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
            <div class="align-items-md-stretch h-100 p-5">
                <ReactMarkdown children={post} />
            </div> 
        </main>
    );
}
*/

export default BlogImport;
