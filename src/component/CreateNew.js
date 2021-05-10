import React from 'react';
import { Button } from 'reactstrap';

export default function CreateNew({ namecreate }) {
  return (
    <>
      <Button color="danger">{namecreate}</Button>
    </>
  );
}
