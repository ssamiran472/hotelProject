import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import home from "../images/home2.webp";
import { HotelContext } from "../context/getJson";
import Room from "../components/room";
import Services from "../components/services";
import Heading from "../components/heading";
import Description from "./description";

const Home = () => {
  let { data } = useContext(HotelContext);
  return (
    <div className="col-12 pl-0 pr-0">
      <Main
        className="col-12"
        img={home}
        title="luxurious Rooms"
        subTitle="Deluxe Rooms Starting At $299"
      />
      <div className="row">
        <div className="text-center col-12">
          <Heading text="Services" />
        </div>
        <Services />
      </div>

      <div className="row">
        <div className="text-center col-12 mb-md-2">
          <Heading text="Featured Rooms" />
        </div>
        {data.map((hotel) => {
          return (
            <div key={hotel.id} className="col-12  col-md-4 pb-2">
              <Room key={hotel.id} hotelInfo={hotel} />
            </div>
          );
        })}
        <Route path={`/rooms/:id`} component={Description} />
      </div>
    </div>
  );
};

export default Home;

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <span className="border">Beach Resort </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/rooms">
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styleds = {
  fontSize: "4rem",
  color: "white",
  padding: "10px",
  borderRadious: "5px",
};
const hr = {
  color: "#b08f3f",
  border: "2px solid",
};

const Mains = styled.div`
  background-image: url(${(props) => (props.image ? props.image : "")});
  height: ${(props) => (props.height ? props.height : "90vh")};
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
`;

export const Main = ({ title, subTitle, img, height }) => {
  return (
    <Mains image={img} height={height} className="text-center">
      <div className="bannar col-md-7 col-9">
        <h1 className="text-light h5 display-5" style={styleds}>
          {title}
        </h1>
        <hr className="col-4" style={hr} />
        <p className="text-light h5"> {subTitle} </p>
        <Link to="/rooms" id="button" className="btn btn-active">
          OUR ROOMS
        </Link>
      </div>
    </Mains>
  );
};
