import React from 'react';
import '../style.css';

export default function SelectDate({namedate}) {
  return (
    <>
      <input
        type="date"
        id="select-date"
        data-placeholder={namedate}
        required
        aria-required="true"
      />
    </>
  );
}
