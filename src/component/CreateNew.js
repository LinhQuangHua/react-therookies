import React from 'react';
import { Button } from 'reactstrap';
import '../style.css';

export default function CreateNew({ namecreate }) {
  return (
    <>
      <Button className="btn-create" color="danger">{namecreate}</Button>
    </>
  );
}
