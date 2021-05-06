import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default function PageLayout({ header, nav }) {
  return (
    <Container fluid="true">
      <Row
        style={{
          backgroundColor: 'rgb(227 12 24)',
          color: '#ffffff',
          height: 50,
          padding: 10
        }}
      >
        <Col style={{ marginLeft: 50}}>Home</Col>
        <Col />
        <Col />
        <Col>{header}</Col>
      </Row>
      <Row className="h-100">
        <Col className="pt-3" xs={4} style={{ padding: 40 }}>
          {nav}
        </Col>
        <Col className="p-4" style={{ backgroundColor: '#fafafa' }} />
      </Row>
    </Container>
  );
}
