import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function BlogListDropDown({ blogdata }) {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select blog to update
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {blogdata.map(post => (<Dropdown.Item href="#/action-3">{post.title}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
