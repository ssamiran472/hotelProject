import React, { useContext, useState, useEffect } from "react";
import { HotelContext } from "../context/getJson";
import "./description.css";

const Descriptoin = (props) => {
  const { data } = useContext(HotelContext);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [pets, setPets] = useState(false);
  const [freeBreakfast, setFreeBreakfast] = useState(false);

  // const [src, setSrc] = useState('')

  // const handlePrice = ()=>{}
  useEffect(() => {
    const id = props.match.params.slug;
    const newArr = data.filter((d) => d.id === parseInt(id));
    if (newArr.length > 0) {
      setPrice(newArr[0].price);
      setCapacity(newArr[0].capacity);
      setPets(newArr[0].pet);
      setSize(newArr[0].size);
      setFreeBreakfast(newArr[0].breakfast);
    }
  }, [data]);
  const handleSrc = () => {
    const id = props.match.params.slug;
    if (data.length > 0) {
      const imgAddress = data.filter((item) => item.id === parseInt(id));
      return imgAddress[0].images;
    }
    return "";
  };
  return (
    <>
      {/* IMAGES DIV */}
      <div
        className="container
      "
      >
        <div className="row mb-2">
          <img
            className="col-4"
            src="https://i.pinimg.com/originals/ad/34/ad/ad34ad8485eb2eb9fce806826b65375d.jpg"
          />
          <img
            className="col-4"
            src="https://i.pinimg.com/originals/ad/34/ad/ad34ad8485eb2eb9fce806826b65375d.jpg"
          />
          <img className="col-4" src={handleSrc()} />
        </div>
      </div>
      {/* FULL DESCRIPTION OF THE ROOM.  */}
      <div className="container mx-auto mt-2 row ">
        <div className="col-md-6">
          <div>
            <h1>Details</h1>
            <section>
              we are trying to build a webclient/ website where users can link
              their id/api can perform the following functions <br />
              1. post from the webclient directly to facebook ( the message
              should be sent from their ip not server side) <br />
              2. send messages <br />
              3. read posts <br />
              4. back up their data
            </section>
          </div>
        </div>
        <div className="col-md-6 ">
          <h1>Info</h1>
          <p>Price : {price}</p>
          <p>Size : {size} SQFT</p>
          <p>Max Capacity : {capacity}</p>
          <p>Pets {pets === true ? "allowed" : "not allowed"} </p>
          <p>
            Free Breakfast {freeBreakfast == true ? "include" : "not include"}
          </p>
        </div>
      </div>
      <div>
        <h1>Extras</h1>

        <ul className="ul">
          <li>Pliush pillows and breathable bed linens</li>
          <li>Complimentry refreshments</li>
          <li>Comfortable beds</li>
          <li>Soft, oversized bath towles</li>
          <li>Adequate safety/scurity</li>
        </ul>
      </div>
    </>
  );
};

export default Descriptoin;
