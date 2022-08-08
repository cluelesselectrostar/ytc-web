import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

import scrollToTop from './ScrollToTop';
import BlogForm from './BlogForm';
import SubmitSuccessModal from './SubmitSuccessModal';

function NewBlogForm() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const [defaultForm, setDefaultForm] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
    markdown: "",
    link: "",
  })
  const [open, setOpen] = useState(false);
  const handleShow = () => setOpen(true);
  function getShow(showState) {
    setOpen(showState);
  }

  const handleSubmit = async (event, newPost) => {
    try {
      await axios.post(`${serverUrl}/api/blogposts`, newPost);
      handleShow();
      setDefaultForm({
        title: "",
        date: "",
        description: "",
        image: "",
        markdown: "",
        link: "",
      });
      // window.location.replace("/post/" + res.data._id);
      event.target.reset();
      handleShow();
    } catch (err) {
      console.log(err);
    }
    scrollToTop();
  };

  return (
    <>
      <h3>New Blog</h3>
      <BlogForm getForm={handleSubmit} defaultForm={defaultForm} />
      <SubmitSuccessModal getShow={getShow} open={open} />
    </>
  );
}

export default NewBlogForm;