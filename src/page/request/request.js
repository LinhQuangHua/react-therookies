import React from 'react';
import { Input } from 'reactstrap';
export default function Request() {
  return (
      <>
        <h5 className="name-list">Request List</h5>
         <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="Returned date"
        />
      </>
  );
}
