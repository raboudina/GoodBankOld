import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AllUsersContext } from "../userContext";

function AllData() {
  const allUsers = React.useContext(AllUsersContext);
  return (
      <Card border="dark" className="allData">
        <Card.Header  className="allData">
          <Row>
            <Col className="name">Name</Col>
            <Col className="email">Email</Col>
            <Col className="password">Password</Col>
          </Row>
        </Card.Header>
        <Card.Body >
          {allUsers.users.map((user, i) => (
            <Row>
              <Col className="name">
                <Card.Text>{user.name}</Card.Text>
              </Col>
              <Col className="email">
                <Card.Text>{user.email}</Card.Text>
              </Col>
              <Col className="password">
                <Card.Text>{user.password}</Card.Text>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>   
  )   
}

export default AllData;
