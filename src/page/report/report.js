import React from 'react';
import { Row, Col } from 'reactstrap';
import CreateNew from '../../component/CreateNew';

export default function Report() {
  return (
    <>
      <h5 className="name-list">Report</h5>
      <Row>
        <Col />
        <Col />
        <Col />
        <Col>
          <CreateNew namecreate="Export" />
        </Col>
      </Row>
    </>
  );
}
