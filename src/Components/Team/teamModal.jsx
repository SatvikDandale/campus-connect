import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Input from "reactstrap/lib/Input";
import { addCommitteeMember, removeCommitteeMember } from "../../Services/committeeService";
import Team from "./team";
import './teamModal.css'

function TeamModal(props) {
  const [value, setValue] = useState({
    role: "",
    userName: "",
  });
  const [form, showForm] = useState(false);

  const addMemberForm = (
    <Form>
      <Form.Group>
        <Form.Label>Add Members</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Role</Form.Label>
        <Input
          type="text"
          name="role__input"
          value={value.role}
          placeholder="Role of the team member"
          id="role__input"
          onChange={(event) => {
            setValue({ ...value, role: event.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>User Name</Form.Label>
        <Input
          type="text"
          name="userName__input"
          placeholder="User Name of the team member"
          value={value.userName}
          id="userName__input"
          onChange={(event) => {
            setValue({ ...value, userName: event.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="team__modal__buttons">
        <Button
          className="float-left"
          onClick={() => {
            if (value.role.length < 4 || value.userName.length < 6) {
              alert(
                "Role should be at least 4 and User Name should be at least 6 characters"
              );
              return;
            }
            console.log(value);
            props.addCommitteeMember(value)
            setValue({ role: "", userName: "" });
            showForm(false);
          }}
        >
          Add
        </Button>
        <Button
          className="float-left"
          onClick={() => {
            console.log(value);
            setValue({ role: "", userName: "" });
            showForm(false);
          }}
        >
          Close
        </Button>
      </Form.Group>
    </Form>
  );

  return (
    <Modal
      size="lg"
      dialogClassName="search__modal"
      show={props.show}
      onHide={props.handleClose}
      centered
    >
      <Modal.Header closeButton>Team Members</Modal.Header>
      <Modal.Body className="team__modal__body">
        {!form && <Button onClick={() => showForm(true)}> Add a Member</Button>}
        {form && addMemberForm}
        <Team removeCommitteeMember={props.removeCommitteeMember} showScrollbar={true} team={props.team}></Team>
      </Modal.Body>
    </Modal>
  );
}


export default TeamModal;