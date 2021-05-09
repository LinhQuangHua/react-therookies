import React from 'react';
import { Row, Col } from 'reactstrap';
import SelectDate from '../../component/SelectDate';

export default function Request() {
  return (
    <>
      <h5 className="name-list">Request List</h5>
      <Row>
        <Col />
        <Col>
          <SelectDate namedate="Returned Date"/>
        </Col>
        <Col />
        <Col />
        <Col />
      </Row>
    </>
  );
}
