import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import scrollToTop from './ScrollToTop';

import SubmitSuccessModal from './SubmitSuccessModal';
import BlogForm from './BlogForm';
// import BlogListDropDown from './BlogListDropDown';

function UpdateBlogForm({ blogdata }) {
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const [defaultForm, setDefaultForm] = useState({
        title: "",
        date: "",
        description: "",
        image: "",
        markdown: "",
        link: "",
    })
    const [title, setTitle] = useState("");
    const [id, setID] = useState("");

    const [open, setOpen] = useState(false);
    const handleShow = () => setOpen(true);
    function getShow(showState) {
        setOpen(showState);
    }

    const handleDefaultField = (post) => {
        setID(post._id);
        setTitle(post.title);
        setDefaultForm(post);
    };

    const handleSubmit = async (event, post) => {
        try {
            await axios.put(`${serverUrl}/api/blogposts/${id}`, post);
            handleShow();
            setTitle("");
            setDefaultForm({
                title: "",
                date: "",
                description: "",
                image: "",
                markdown: "",
                link: "",
            });
            event.target.reset();
            // window.location.replace("/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
        scrollToTop();
    };

    return (
        <>
            <h3>Update Blog</h3>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {title !== "" ?
                        (
                            `${title}`
                        ) : (
                            "Select blog to update"
                        )
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {blogdata.map(post => (<Dropdown.Item key={post._id} onClick={() => handleDefaultField(post)}>{post.title}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>

            <BlogForm getForm={handleSubmit} defaultForm={defaultForm}/>
            <SubmitSuccessModal getShow={getShow} open={open} />
        </>
    );
}

export default UpdateBlogForm;