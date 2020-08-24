import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShowText = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 15, 10, 60%);
`;

const Button = styled.button`
  position: absolute;
  font-weight: 500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(214, 171, 77, 100%);
  color: rgba(10, 10, 10, 75%);
  border: none;
`;

const Room = ({ hotelInfo, match }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="contain col-10 col-md-11"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={hotelInfo.images} alt="image" />
      <div className="text-note">
        <p>
          <b>${hotelInfo.price}</b>
          <br />
          <span style={{ fontSize: "1rem" }}>per night</span>
        </p>
      </div>
      {isShown && (
        <ShowText>
          <Button>
            <Link to={`/rooms/${hotelInfo.id}`}>features</Link>
          </Button>
        </ShowText>
      )}
    </div>
  );
};

export default Room;
