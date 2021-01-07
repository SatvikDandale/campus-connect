import React from "react";
import { Modal } from "react-bootstrap";

export default function TeamModal(props) {
  return (
    <Modal
      size="lg"
      dialogClassName="search__modal"
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>Team Members</Modal.Header>
    </Modal>
  );
}
