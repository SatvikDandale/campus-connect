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
      <Modal.Header closeButton>Update your name</Modal.Header>
      <Modal.Body>
        <Form>
          {!props.committee && (
            <>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Input
                  type="text"
                  name="first__name__input"
                  value={props.name.firstName}
                  id="first__name__input"
                  onChange={(event) => {
                    props.setName({
                      firstName: event.target.value,
                      lastName: props.name.lastName,
                      intro: props.name.intro,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Input
                  type="text"
                  name="last__name__input"
                  value={props.name.lastName}
                  id="last__name__input"
                  onChange={(event) => {
                    props.setName({
                      firstName: props.name.firstName,
                      lastName: event.target.value,
                      intro: props.name.intro,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Intro</Form.Label>
                <Input
                  type="text"
                  name="intro__input"
                  value={props.name.intro}
                  id="intro__input"
                  onChange={(event) => {
                    props.setName({
                      firstName: props.name.firstName,
                      lastName: props.name.lastName,
                      intro: event.target.value,
                    });
                  }}
                />
              </Form.Group>
            </>
          )}

          {props.committee && (
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Input
                type="text"
                name="name__input"
                value={props.committeeName}
                id="name__input"
                onChange={(event) => {
                  props.setCommitteeName(event.target.value);
                }}
              />
            </Form.Group>
          )}
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
