import React, { useState, useContext, useEffect } from "react";
import { HotelContext } from "../context/getJson";

const Filter = (props) => {
  const { data } = useContext(HotelContext);
  const [price, setPrice] = useState(120);
  const [room, setRoom] = useState("all");
  const [guest, setGuest] = useState(2);
  const [pet, setPet] = useState(false);
  const [breakFast, setBreakFast] = useState(false);
  // room types list ..
  let types = data.map((d) => d.type_of);
  types = ["all", ...new Set(types)];
  // capacity list ..
  let capacities = [...new Set(data.map((d) => d.capacity))];

  //
  const price_list = [...new Set(data.map((d) => d.price))];
  // min price to set the minimum price value
  const min_price = Math.min(...price_list);
  //max price to set the maximum price value to the input ..
  const max_price = Math.max(...price_list);
  // avareage value is for initial value

  useEffect(() => {
    if (price_list.length > 0) {
      setPrice(Math.round(max_price / 2));
    }
  }, [max_price]);

  useEffect(() => props.filter(price, room, guest, pet, breakFast), [
    price,
    room,
    guest,
    pet,
    breakFast,
  ]);
  return (
    <div className="row">
      <div className="col">
        <label htmlFor="room">Room Type</label>
        <br />
        <select
          id="room"
          value={room.value}
          onChange={(e) => {
            setRoom(e.target.value);
            props.filter(room);
          }}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="col">
        <label htmlFor="guest">Guest</label>
        <br />
        <select
          id="guest"
          onChange={(e) => setGuest(e.target.value)}
          value={guest.value}
        >
          {capacities.map((capacity) => (
            <option key={capacity} value={capacity}>
              {capacity}
            </option>
          ))}
        </select>
      </div>
      <div className="col">
        <div className="slidecontainer">
          <label htmlFor="price"> Room Price ${price} </label>
          <br />
          <input
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            type="range"
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>
      </div>
      <div className="col">
        <input type="checkbox" onChange={(e) => setBreakFast(!breakFast)} />
        breakfast
        <input type="checkbox" onChange={(e) => setPet(!pet)} />
        pet
      </div>
    </div>
  );
};

export default Filter;
