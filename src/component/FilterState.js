import React from 'react';
import '../style.css';

export default function FilterState({ namefilter }) {
  const [expanded, setExpanded] = React.useState(false);
  const checkboxes = React.useRef(null);

  const showCheckboxes = () => {
    if (!expanded) {
      checkboxes.current.style.display = 'block';
      setExpanded(true);
    } else {
      checkboxes.current.style.display = 'none';
      setExpanded(false);
    }
  };
  return (
    <>
      <form>
        <div className="multiselect">
          <div className="selectBox" onClick={showCheckboxes}>
            <span for="stuff" className="fa fa-filter" />
            <select class="filter-cate">
              <option>{namefilter}</option>
            </select>
            <div className="overSelect" />
          </div>
          <div ref={checkboxes} className="checkboxes">
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
