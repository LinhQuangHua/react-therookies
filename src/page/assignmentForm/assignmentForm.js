import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import '../../style.css';

const assigment = [
  {
    id: 1,
    username: 'Nobita-kun',
    assetname: 'Laptop',
    assigned_date: '2020-05-20',
    note: 'The best laptop gaming.'
  },
  {
    id: 2,
    username: 'Laptop Acer',
    assetname: 'Moniter',
    assigned_date: '2020-10-15',
    note: 'The best sony moniter.'
  }
];
export default function UserForm() {
  const { id } = useParams();
  const [dataEdit, setEdit] = React.useState(null);
  const [nameHeader, setnameHeader] = React.useState('');
  React.useEffect(() => {
    if (id) {
      setnameHeader('Edit Assignment');
      let data = assigment.find(data => data.id === Number(id));
      setEdit(data);
      console.log(data);
    } else {
      setnameHeader('Create New Assignment');
    }
  }, [id]);
  const handleSubmit = event => {
    const myObj = {
      username: event.target.userName.value,
      assetname: event.target.assetName.value,
      assigned_date: event.target.assignedDate.value,
      note: event.target.noteAssignment.value
    };

    event.preventDefault();
    console.log(myObj);
  };
  return (
    <>
      <h5 className="name-list">{nameHeader}</h5>
      <form className="form-assignment" onSubmit={handleSubmit}>
        <Row className="row-create-new">
          <Col className="col-assignment" xs="2">
            <span>User</span>
          </Col>
          <Col className="col-assignment-new">
            <div class="wrapBox">
              <div class="searchBox">
                <span class="fa fa-search" id="searchIcon" />
                <input
                  type="text"
                  class="searchName"
                  name="userName"
                  defaultValue={dataEdit?.username ?? ''}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-assignment" xs="2">
            <span>Asset</span>
          </Col>
          <Col className="col-assignment-new">
            <div class="wrapBox">
              <div class="searchBox">
                <span class="fa fa-search" id="searchIcon" />
                <input
                  type="text"
                  class="searchName"
                  name="assetName"
                  defaultValue={dataEdit?.assetname ?? ''}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-assignment" xs="2">
            <span>Assigned Date</span>
          </Col>
          <Col className="col-assignment-new">
            <input
              type="date"
              className="date-assignment"
              name="assignedDate"
              defaultValue={dataEdit?.assigned_date ?? ''}
            />
          </Col>
        </Row>
        <Row className="row-create-new">
          <Col className="col-assignment" xs="2">
            <span>Note</span>
          </Col>
          <Col className="col-create-assingment-note">
            <textarea
              rows="5"
              cols="25"
              className="note-assignment"
              name="noteAssignment"
              defaultValue={dataEdit?.note ?? ''}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="area-button-assignment">
            <div className="submit-create-assignment">
              <Button color="danger" type="submit">
                Save
              </Button>
              <Link to="/assignment">
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
