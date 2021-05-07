import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


export default function PageLayout({ header, nav, content }) {
  return (
    <>
      <Container fluid="true">
        <Row
          style={{
            backgroundColor: 'rgba(207,35,56,1)',
            color: '#ffffff',
            height: 50,
            padding: 10
          }}
        >
          <Col style={{ marginLeft: 50 }}>Home</Col>
          <Col />
          <Col />
          <Col>{header}</Col>
        </Row>
        <Row className="h-100">
          <Col className="pt-3" xs={4} style={{ padding: 40 }}>
            {nav}
          </Col>
          <Col className="p-4" style={{ marginTop: 50 }}>
            {content}
          </Col>
        </Row>
      </Container>
    </>
  );
}
