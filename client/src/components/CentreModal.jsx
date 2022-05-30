import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from './ListGpItem';

function CentreModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.content === null ?
          <></>
          :
          <ListGroup>
            <ListGroupItem title="Lines" info = {props.content.Lines} />
            { props.content["Step free Info"] === "" ? <></> : <ListGroupItem title="Step free access" info = {props.content["Step free Info"]} />}
            { props.content["Borough"] === "" ? <></> : <ListGroupItem title="Borough" info = {props.content["Borough"]} /> }
            { props.content["Zones"] === "" ? <></> : <ListGroupItem title="Zones" info = {props.content["Zones"]} /> }
            { props.content["Opening date"] === "" ? <></> : <ListGroupItem title="Opening date" info = {props.content["Opening date"]}/> }
            { props.content["Other names"] === "" ? <></> : <ListGroupItem title="Other names" info = {props.content["Other names"]} /> }
          </ListGroup>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CentreModal;