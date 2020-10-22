import React, { useState } from "react";
import { Modal, Button, Form, Col, ListGroup, Row } from "react-bootstrap";
import { Input } from "reactstrap";

export default function PersonalDetailsForm(props) {
  const [talent, setTalent] = useState("");
  const [achievement, setAchievement] = useState("");
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>Update your personal details</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Home Town</Form.Label>
            <Input
              type="text"
              name="home__town__input"
              value={props.personalDetails.homeTown}
              id="first__name__input"
              onChange={(event) => {
                props.setPersonalDetails({
                  ...props.personalDetails,
                  homeTown: event.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Talents</Form.Label>
            <Row>
              <Col sm="7">
                <Input
                  type="text"
                  placeholder="talent"
                  onChange={(event) => setTalent(event.target.value)}
                  value={talent}
                />
              </Col>
              <Col>
                <Button
                  className="float-right"
                  onClick={() => {
                    props.setPersonalDetails({
                      ...props.personalDetails,
                      talents: [...props.personalDetails.talents, talent],
                    });
                  }}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <ListGroup style={{ display: "flex", flexDirection: "row" }}>
              {props.personalDetails.talents.length === 0
                ? null
                : props.personalDetails.talents.map((talent) => (
                    <p className="details_entry entry_card">{talent}</p>
                  ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Achievements</Form.Label>
            <Row>
              <Col sm="7">
                <Input
                  type="text"
                  placeholder="achievements"
                  onChange={(event) => setAchievement(event.target.value)}
                  value={achievement}
                />
              </Col>
              <Col>
                <Button
                  className="float-right"
                  onClick={() => {
                    props.setPersonalDetails({
                      ...props.personalDetails,
                      achievements: [
                        ...props.personalDetails.achievements,
                        achievement,
                      ],
                    });
                  }}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <ListGroup style={{ display: "flex", flexDirection: "row" }}>
              {props.personalDetails.achievements.length === 0
                ? null
                : props.personalDetails.achievements.map((achievement) => (
                    <p className="details_entry entry_card">{achievement}</p>
                  ))}
            </ListGroup>
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
