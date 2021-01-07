import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { forgotPassword, resetPassword } from "../../Services/userService";
import "./settings.css";

function SettingsModal(props) {
  const [form, setForm] = useState({
    old: "",
    new: "",
    confirm: "",
  });
  const [userName, setUserName] = useState("");

  const handleConfirmPasswordChange = (event) => {
    setForm({
      ...form,
      confirm: event.target.value,
    });
  };

  const submitForm = () => {
    if (!props.changePassword && !props.forgotPassword) {
      if (userName.length < 6) {
        alert("User Name must be at least 6 characters.");
        return;
      }
      forgotPassword({ userName })
        .then(() => alert("Please check your email inbox"))
        .catch((error) => {
          console.log(error);
          alert("Please try again");
        });
      return;
    }
    else if (props.forgotPassword) {
      if (form.new.length < 6) {
        alert("Password length must me at least 6 characters.");
        return;
      }
      resetPassword({password: form.new}, props.match.params.token)
      .then(() => {
        alert("Successfully changed your password")
        props.history.push('/login')
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 403) {
          alert("Your token is wrong.")
          return
        }
        alert("Please try again");
        console.log(error);
      })
      return;
    }

    else if (
      ((props.changePassword && form.old.length >= 6) ||
        !props.changePassword) &&
      form.new === form.confirm &&
      form.new.length >= 6
    ) {
      console.log(form);
      props.handleSettingsSubmit(form, "password");
      setForm({
        old: "",
        new: "",
        confirm: "",
      });
    } else {
      alert("Passwords length not enough");
    }
  };

  const changePassword = (
    <Form.Group>
      <Form.Label>Change your password</Form.Label>
      {props.changePassword && (
        <>
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
        </>
      )}
      {!props.changePassword && !props.forgotPassword && (
        <Form.Group>
          <Form.Label>User Name associated with your account</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </Form.Group>
      )}
      {props.forgotPassword && (
        <>
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
        </>
      )}
      <Button type="button" onClick={submitForm}>
        Submit
      </Button>
    </Form.Group>
  );

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size={props.changePassword ? "lg" : ""}
      dialogClassName="search__modal"
    >
      <Modal.Header closeButton={!props.forgotPassword}>
        {props.changePassword ? "Settings" : "Forgot password"}
      </Modal.Header>
      <Modal.Body>
        <Form>{changePassword}</Form>
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
