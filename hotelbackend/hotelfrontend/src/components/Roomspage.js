import React, { useContext } from "react";
import { Main } from "./home";
import RoomsBackground from "../images/rooms.jpg";
import styled from "styled-components";
import Filter from "./filter";
import { HotelContext } from "../context/getJson";
import Room from "./room";

const Rooms = () => {
  const { data } = useContext(HotelContext);

  return (
    <>
      <Main
        className="col-12"
        img={RoomsBackground}
        height="70vh"
        title="Our Rooms"
        subTitle=""
      />
      <Filter className="col-12" />
      <div className="row">
        {data.map((info) => {
          return (
            <div key={info.id} className="col-12  col-md-4 pb-2 text-center">
              <Room key={info.id} hotelInfo={info} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rooms;

const Title = styled.h1`
  font-weight: 500;
`;

const Search = (props) => {
  return (
    <div className="text-center">
      <Title className="display-5">{props.title}</Title>
      <hr
        className="col-2"
        style={{
          color: "#4b5215",
          border: "3px solid #4b5215",
          backgroundColor: "#4b5215",
        }}
      />
    </div>
  );
};
