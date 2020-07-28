import React, { useState } from "react";

const Filter = () => {
  const [price, setPrice] = useState(40);
  const handleChange = (event) => {
    let value = event.target.value;
    console.log(value);
    setPrice(value);
  };

  return (
    <div className="row">
      <div className="col">
        <label htmlFor="room">Room Type</label>
        <br />
        <select id="room">
          <option className="dropdown-item">all</option>
          <option className="dropdown-item">single</option>
          <option className="dropdown-item">dobule</option>
          <option className="dropdown-item"> family </option>
          <option className="dropdown-item"> presidential </option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="guest">Guest</label>
        <br />
        <select id="guest">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="col">
        <div className="slidecontainer">
          <label htmlFor="price"> Room Price ${price} </label>
          <br />
          <input
            id="price"
            onChange={handleChange}
            type="range"
            min="1"
            max="100"
            value={price}
          />
        </div>
      </div>
      <div className="col">
        <input type="checkbox" />
        breakfast
        <input type="checkbox" />
        pet
      </div>
    </div>
  );
};

export default Filter;
