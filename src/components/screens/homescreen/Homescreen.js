import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../../categoryBar/Category";
import Video from "../../video/Video";
import "./_homescreen.scss";

const Homescreen = () => {
  return (
    <div className="homeScreen">
      <Container>
        <Category />
        <Row>
          {[...Array(10)].map(() => {
            return (
              <Col lg={3} md={4}>
                <Video />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Homescreen;
