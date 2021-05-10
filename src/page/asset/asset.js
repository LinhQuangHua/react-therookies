import React from 'react';
import { Row, Col } from 'reactstrap';
import SearchBar from '../../component/SearchBar';
import CreateNew from '../../component/CreateNew';
import FilterState from '../../component/FilterState';

export default function Asset() {
  return (
    <>
      <h5 className="name-list">Asset List</h5>
      <Row>
        <Col>
          <FilterState namefilter="State" />
        </Col>
        <Col>
          <FilterState namefilter="Category" />
        </Col>
        <Col>
          <SearchBar />
        </Col>
        <Col>
          <CreateNew namecreate="Create new asset" />
        </Col>
      </Row>
    </>
  );
}
