import React from "react";
import { Link } from "react-router-dom";

const Descriptoin = (props) => {
  console.log("<<< from description>>>>", props);
  return <h1>{props.match.params.slug}</h1>;
};

export default Descriptoin;
