import React from 'react';
import '../SelectCate.css';

const category = [
  {
    id: 1,
    name: 'Laptop'
  },
  {
    id: 2,
    name: 'Monitor'
  },
  {
    id: 3,
    name: 'Personal Compiter'
  }
];

export default function SelectCate() {
  const [stateCate, setStateCate] = React.useState([]);

  const handleChangeCate = event => {
    setStateCate(Number(event.target.value));
    console.log(event.target.value);
  };

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

  return (
    <form>
      <div class="multiselect">
        <div class="selectBox" onClick={showCheckboxes}>
          <span for="stuff" class="fa fa-chevron-down" />
          <select class="filter-cate">
            <option>Category</option>
          </select>
          <div class="overSelect" />
        </div>
        <div id="checkboxes">
          {/* <label class="checkboxlist">
            <option>Laptop</option>
          </label>
          <label class="checkboxlist">
            <option>Monitor</option>
          </label>
          <label class="checkboxlist">
            <option>Personal Computer</option>
          </label> */}
          {category &&
            category.map(cate => (
              <label class="checkboxlist">
                <option key={cate.id} value={cate.name} onChange={stateCate}>
                  {cate.name}
                </option>
              </label>
            ))}
          <hr />
          <label class="checkboxlist" style={{ padding: 6 }}>
            <input type="text" placeholder="Blutooth Mouse" id="nameCate" />
            <input type="text" placeholder="BM" id="shortname" disabled />
            <i class="fa fa-check" />
            <i class="fa fa-times" onClick={showCheckboxes} />
          </label>
        </div>
      </div>
    </form>
  );
}
