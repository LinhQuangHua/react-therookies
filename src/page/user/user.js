import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../../component/SearchBar';
import CreateNew from '../../component/CreateNew';
import FilterState from '../../component/FilterState';

export default function User() {
  return (
    <>
      <h5 className="name-list">User List</h5>
      <Row>
        <Col>
          <FilterState namefilter="Type" />
        </Col>
        <Col />
        <Col>
          <SearchBar />
        </Col>
        <Col>
          <Link to="/new-user">
            <CreateNew namecreate="Create new user" />
          </Link>
        </Col>
      </Row>
    </>
  );
}
