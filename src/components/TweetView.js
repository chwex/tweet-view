import React from "react";
import "./TweetView.css";
import { Container, Row, Col } from "react-bootstrap";

function TweetView() {
  return (
    <div>
      <h1>Tweet View</h1>
      <Container fluid>
        <Row>
          <Col>TweeterName</Col>
        </Row>
      </Container>
    </div>
  );
}

export default TweetView;
