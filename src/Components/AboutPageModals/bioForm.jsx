import React from "react";
import {
  Modal,
  Button,
  Form,
  //   Col,
  //   ListGroup,
  //   ListGroupItem,
  //   Row,
} from "react-bootstrap";
import { Input } from "reactstrap";

export default function BioForm(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>{props.committee ? "Update About Us" : "Update your bio"}</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>{"About Us"}</Form.Label>
            <Input
              type="textarea"
              name="bio__input"
              value={props.bio}
              id="bio__input"
              onChange={(event) => props.setBio(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
