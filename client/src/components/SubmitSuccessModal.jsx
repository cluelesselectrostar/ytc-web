import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useEffect, useState} from "react";

function SubmitSuccessModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        props.getShow(false);
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (props.open === true) {
            handleShow();
            props.getShow(true);
        }
    }, [props]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Post submitted successfully!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Head to the blog page to check out the update immediately!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SubmitSuccessModal;