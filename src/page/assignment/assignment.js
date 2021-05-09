import React from 'react';
import { Row, Col } from 'reactstrap';
import SelectDate from '../../component/SelectDate';

export default function Assignment() {
  return (
    <>
      <h5 className="name-list">Assignment List</h5>
      <Row>
        <Col />
        <Col>
          <SelectDate namedate="Assigned Date"/>
        </Col>
        <Col />
        <Col />
      </Row>
    </>
  );
}
