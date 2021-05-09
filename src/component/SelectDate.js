import React from 'react';
import { Input } from 'reactstrap';

export default function SelectDate() {
  return (
      <>
        <Input
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="datetime placeholder"
        />
      </>
  );
}
