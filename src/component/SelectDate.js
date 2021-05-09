import React from 'react';
import { Input } from 'reactstrap';
import '../style.css';

export default function SelectDate() {
  return (
      <>
        <Input
          type="date"
          id="select-date"
          placeholder="datetime placeholder"
        />
      </>
  );
}
