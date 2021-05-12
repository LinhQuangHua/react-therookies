import React from 'react';
import '../style.css';

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById('checkboxes');
  if (!expanded) {
    checkboxes.style.display = 'block';
    expanded = true;
  } else {
    checkboxes.style.display = 'none';
    expanded = false;
  }
}

export default function FilterState() {
  return (
    <>
      <form>
        <div className="multiselect">
          <div className="selectBox" onClick={showCheckboxes}>
            <span for="stuff" className="fa fa-filter" />
            <select class="filter-cate">
              <option>Category</option>
            </select>
            <div className="overSelect" />
          </div>
          <div id="checkboxes">
            <label className="checkboxlist">
              <input class="checkbox" type="checkbox" id="" />
              All
            </label>
            <label className="checkboxlist">
              <input class="checkbox" type="checkbox" id="one" />
              Laptop
            </label>
            <label className="checkboxlist">
              <input
                class="checkbox"
                type="checkbox"
                class="checkbox"
                id="two"
              />
              Monitor
            </label>
            <label className="checkboxlist">
              <input class="checkbox" type="checkbox" id="three" />
              Personal Computer
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
