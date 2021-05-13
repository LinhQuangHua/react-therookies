import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import SelectDate from '../../component/SelectDate';
import SearchBar from '../../component/SearchBar';
import CreateNew from '../../component/CreateNew';
import FilterState from '../../component/FilterState';

export default function Assignment() {
  return (
    <>
      <h5 className="name-list">Assignment List</h5>
      <Row>
        <Col>
          <FilterState namefilter="State" />
        </Col>
        <Col>
          <SelectDate namedate="Assigned Date" />
        </Col>
        <Col>
          <SearchBar />
        </Col>
        <Col>
          <Link to="/new-assignment">
            <CreateNew namecreate="Create new assignment" />
          </Link>
        </Col>
      </Row>
    </>
  );
}
