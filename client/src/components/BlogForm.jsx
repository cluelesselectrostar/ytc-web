import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState} from "react";

function BlogForm(props) {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [link, setLink] = useState("");
    const [md, setMD] = useState("");
    const [id, setID] = useState("");

    const handleDefaultField = (post) => {
        setID(post._id);
        if (post.title) {
            setTitle(post.title);
        } else {
            setTitle("");
        }
        if (post.date) {
            setDate(post.date);
        } else {
            setDate("");
        }
        if (post.description) {
            setDesc(post.description);
        } else {
            setDesc("");
        }
        if (post.image) {
            setImg(post.image);
        } else {
            setImg("");
        }
        if (post.link) {
            setLink(post.link);
        } else {
            setLink("");
        }
        if (post.markdown) {
            setMD(post.markdown);
        } else {
            setMD("");
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const amendedPost = {
            title: title,
            date: date,
            description: desc,
            image: img,
            markdown: md,
            link: link,
        };
        props.getForm(e, amendedPost);
    };

    useEffect(() => {
        console.log("handle default form");
        console.log(props.defaultForm);
        handleDefaultField(props.defaultForm);
    }, [props.defaultForm]);

    return (
        <Form onSubmit={handleForm}
            >
                <Form.Group className="mt-4 mb-3" controlId="blogTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={title} placeholder="A creative blog title......"  onChange={e => setTitle(e.target.value)} />
                    <Form.Text className="text-muted">
                        Required
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="blogDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text"
                        defaultValue={date}
                        placeholder="YYYY-MM-DD" 
                        onChange={e => setDate(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Required
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="blogDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="An inspiring description that blows your mind....."
                        defaultValue={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Required
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="blogImage">
                    <Form.Label>Image Hyperlink</Form.Label>
                    <Form.Control type="text"
                        defaultValue={img}
                        placeholder="Link from Imgur?" 
                        onChange={e => setImg(e.target.value)} />
                    <Form.Text className="text-muted">
                        Required for thumbnail.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="blogLink">
                    <Form.Label>External Link</Form.Label>
                    <Form.Control type="text"
                        defaultValue={link}
                        placeholder="Medium or Exposure?" 
                        onChange={e => setLink(e.target.value)} />
                    <Form.Text className="text-muted">
                        Required
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="blogMD">
                    <Form.Label>Markdown</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={md}
                        placeholder="YTC-flavoured Markdown......"
                        as="textarea" rows={30}
                        onChange={e => setMD(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
    )
}

export default BlogForm;