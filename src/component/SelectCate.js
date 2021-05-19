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
  const [NewCate, setNewCate] = React.useState('');

  const handleChangeNewCate = event => {
    setNewCate(String(event.target.value));
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

  const handleChangeCate = event => {
    setStateCate(String(event.target.value));
    console.log(event.target.value);
  };

  return (
    <form>
      <div class="multiselect">
        <div class="selectBox" onClick={showCheckboxes}>
          <span class="fa fa-chevron-down" />
          <select class="filter-cate">
            <option>{stateCate}</option>
          </select>
          <div class="overSelect" />
        </div>
        <div id="checkboxes">
          {category &&
            category.map(cate => (
              <label class="checkboxlist">
                <option
                  key={+cate.id}
                  value={cate.name}
                  id="mySelect"
                  onClick={handleChangeCate}
                >
                  {cate.name}
                </option>
              </label>
            ))}
          <hr />
          <label class="checkboxlist" style={{ padding: 6 }}>
            <input
              type="text"
              placeholder="Blutooth Mouse"
              id="nameCate"
              onChange={handleChangeNewCate}
            />
            <input type="text" placeholder="BM" id="shortname" disabled />
            <i class="fa fa-check" />
            <i class="fa fa-times" onClick={showCheckboxes} />
          </label>
        </div>
      </div>
    </form>
  );
}
