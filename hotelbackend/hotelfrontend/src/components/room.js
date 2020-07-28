import React from "react";
import styled from "styled-components";

const Room = ({ hotelInfo }) => {
  console.log(hotelInfo.images);
  return (
    <div className="contain col-10 col-md-11">
      <img src={hotelInfo.images} />
      <div className="text-note">
        <p>
          <b>${hotelInfo.price}</b>
          <br />
          <span style={{ fontSize: "1rem" }}>per night</span>
        </p>
      </div>
    </div>
  );
};

export default Room;
