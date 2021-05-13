import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import '../../style.css';

const userdate = [
  {
    firstname: 'Doraemon',
    lastname: 'Nobita-kun',
    dob: '20/10/1998',
    gender: true,
    joinday: '13/05/2020',
    type: 'admin'
  },
  {
    firstname: 'Pikachu',
    lastname: 'Pokemon',
    dob: '17/11/2000',
    gender: false,
    joinday: '13/05/2020',
    type: 'staff'
  }
];
export default function UserForm() {
  const handleSubmit = event => {
    event.preventDefault();

    const myObj = {
      firstname: event.target.firstName.value,
      lastname: event.target.lastName.value,
      dob: event.target.dobUser.value,
      gender: event.target.gender.value,
      joinday: event.target.dateAddUser.value,
      type: event.target.nameCategoryType.value
    };
    console.log(myObj);
  };
  return (
    <>
      <h5 className="name-list">Create new user</h5>
      <form className="form-user" onSubmit={handleSubmit}>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>First Name</span>
          </Col>
          <Col className="col-user-new">
            <input type="text" className="first-name-user" name="firstName" />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Last Name</span>
          </Col>
          <Col className="col-user-new">
            <input type="text" className="last-name-user" name="lastName" />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Date of Birth</span>
          </Col>
          <Col className="col-user-new">
            <input type="date" className="date-user" name="dobUser" />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Gender</span>
          </Col>
          <Col className="col-user-new" style={{ display: 'inline-flex' }}>
            <label className="container-radio">
              Female
              <input type="radio" name="radio" value="true" name="gender" />
              <span className="checkmark" />
            </label>
            <label className="container-radio">
              Male
              <input type="radio" name="radio" value="false" name="gender" />
              <span className="checkmark" />
            </label>
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Joined Date</span>
          </Col>
          <Col className="col-user-new">
            <input type="date" className="date-user" name="dateAddUser" />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Type</span>
          </Col>
          <Col className="col-user-new">
            <select name="nameCategoryType" className="category-type">
              <option value="Staff">Staff</option>
              <option value="Admin">Admin</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="area-button-user">
            <div className="submit-create-user">
              <Button color="danger" type="submit">
                Save
              </Button>
              <Link to="/user">
                <Button
                  type="reset"
                  outline
                  color="secondary"
                  className="btn-cancel"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </Col>
          <Col />
          <Col />
          <Col />
        </Row>
      </form>
    </>
  );
}
