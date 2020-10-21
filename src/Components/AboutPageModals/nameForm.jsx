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

export default function NameForm(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>Update your bio</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Input
              type="textarea"
              name="first__name__input"
              value={props.name.firstName}
              id="first__name__input"
              onChange={(event) => {
                props.setName({
                  firstName: event.target.value,
                  lastName: props.name.lastName,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Input
              type="textarea"
              name="last__name__input"
              value={props.name.lastName}
              id="last__name__input"
              onChange={(event) => {
                props.setName({
                  firstName: props.name.firstName,
                  lastName: event.target.value,
                });
                console.log({
                  firstName: props.name.firstName,
                  lastName: event.target.value,
                });
              }}
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
