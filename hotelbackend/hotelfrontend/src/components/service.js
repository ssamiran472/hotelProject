import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = (props) => {
  return (
    <div className="m-1 m-md-2">
      <div className="col-12 text-center">
        <FontAwesomeIcon
      style={{ color: "#c4a14f", fontSize: "20px" }}
          icon={props.icon}
        />
      </div>
      <h4 className="h5 display-6">{props.title}</h4>

      <p className="text-justify">{props.description}</p>
    </div>
  );
};

export default Service;
