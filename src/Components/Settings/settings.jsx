import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "./settings.css";

function SettingsModal(props) {
  const [form, setForm] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const handleConfirmPasswordChange = (event) => {
    setForm({
      ...form,
      confirm: event.target.value,
    });
  };

  const submitForm = () => {
      if (form.old.length >= 6 && form.new === form.confirm && form.new.length >= 6) {
          console.log(form);
          props.handleSettingsSubmit(form, "password");
          setForm({
            old: "",
            new: "",
            confirm: "",
          })
      }
      else {
          alert("Passwords length not enough");
      }
  }

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      dialogClassName="search__modal"
    >
      <Modal.Header closeButton>Settings</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Change your password</Form.Label>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Current Password
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="password"
                  placeholder="Current Password"
                  value={form.old}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      old: event.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                New Password
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  value={form.new}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      new: event.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Confirm Password
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="password"
                  isValid={form.new !== "" && form.new === form.confirm}
                  isInvalid={form.new !== "" && form.new !== form.confirm}
                  placeholder="Confirm Password"
                  value={form.confirm}
                  onChange={handleConfirmPasswordChange}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords don't match
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Button type="button" onClick={submitForm}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(SettingsModal);
