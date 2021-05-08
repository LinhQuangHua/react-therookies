import React from 'react';
import '../style.css';
import { Container, Row, Col } from 'reactstrap';

export default function PageLayout({ header, nav, content, rename }) {
  return (
    <>
      <Container fluid="true">
        <Row className="row-home">
          <Col className="home">{rename}</Col>
          <Col />
          <Col />
          <Col>{header}</Col>
        </Row>
        <Row className="h-100">
          <Col className="pt-3" xs={4}>
            {nav}
          </Col>
          <Col className="p-4">
            {content}
          </Col>
        </Row>
      </Container>
    </>
  );
}
