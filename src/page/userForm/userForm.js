import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import '../../style.css';

const userdate = [
  {
    id: 1,
    firstname: 'Doraemon',
    lastname: 'Nobita-kun',
    dob: '2000-01-15',
    gender: 0,
    joinday: '2020-03-15',
    type: 'Admin'
  },
  {
    id: 2,
    firstname: 'Pikachu',
    lastname: 'Pokemon',
    dob: '1998-06-01',
    gender: 1,
    joinday: '2020-05-14',
    type: 'Staff'
  }
];
export default function UserForm() {
  const { id } = useParams();
  const [dataEdit, setEdit] = React.useState(null);
  const [nameHeader, setnameHeader] = React.useState('');
  const [selectType, setSelectType] = React.useState('');
  const [gender, setGender] = React.useState(0);
  React.useEffect(() => {
    if (id) {
      setnameHeader('Edit User');
      let data = userdate.find(data => data.id === Number(id));
      setEdit(data);
      setGender(data.gender);
      setSelectType(data.type);
      console.log(data);
    } else {
      setnameHeader('Create New User');
    }
  }, [id]);
  const handleSubmit = event => {
    const myObj = {
      firstname: event.target.firstName.value,
      lastname: event.target.lastName.value,
      dob: event.target.dobUser.value,
      gender: event.target.gender.value,
      joinday: event.target.dateAddUser.value,
      type: event.target.nameCategoryType.value
    };

    event.preventDefault();
    console.log(myObj);
  };

  const handeChangeGender = event => {
    console.log(event.target.value);
    setGender(event.target.value);
  };
  return (
    <>
      <h5 className="name-list">{nameHeader}</h5>
      <form className="form-user" onSubmit={handleSubmit}>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>First Name</span>
          </Col>
          <Col className="col-user-new">
            <input
              type="text"
              className="first-name-user"
              name="firstName"
              defaultValue={dataEdit?.firstname ?? ''}
            />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Last Name</span>
          </Col>
          <Col className="col-user-new">
            <input
              type="text"
              className="last-name-user"
              name="lastName"
              defaultValue={dataEdit?.lastname ?? ''}
            />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Date of Birth</span>
          </Col>
          <Col className="col-user-new">
            <input
              type="date"
              className="date-user"
              name="dobUser"
              defaultValue={dataEdit?.dob ?? ''}
            />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Gender</span>
          </Col>
          <Col className="col-user-new" style={{ display: 'inline-flex' }}>
            <label className="container-radio">
              Female
              <input
                type="radio"
                value="0"
                name="gender"
                onChange={handeChangeGender}
                checked={Number(gender) === 0}
              />
              <span className="checkmark" />
            </label>
            <label className="container-radio">
              Male
              <input
                type="radio"
                value="1"
                name="gender"
                onChange={handeChangeGender}
                checked={Number(gender) === 1}
              />
              <span className="checkmark" />
            </label>
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Joined Date</span>
          </Col>
          <Col className="col-user-new">
            <input
              type="date"
              className="date-user"
              name="dateAddUser"
              defaultValue={dataEdit?.joinday ?? ''}
            />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-user" xs="2">
            <span>Type</span>
          </Col>
          <Col className="col-user-new">
            <select
              name="nameCategoryType"
              value={selectType}
              onChange={e => setSelectType(e.target.value)}
              className="category-type"
            >
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
