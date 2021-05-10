import React from 'react';
import '../style.css';

export default function FilterState({ namefilter }) {
  return (
    <>
      <form class="example">
        <input type="text" placeholder={namefilter} />
        <button type="submit">
          <i class="fa fa-filter" />
        </button>
      </form>
    </>
  );
}
