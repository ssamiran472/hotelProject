import React, { useState, useEffect } from "react";
import "./servicescss.css";
import {
  faCocktail,
  faBeer,
  faHiking,
  faShuttleVan,
} from "@fortawesome/free-solid-svg-icons";
import Service from "./service";
import axios from "axios";

const icons = [faCocktail, faHiking, faShuttleVan, faBeer];

const Services = () => {
  const [services, setServices] = useState([]);

  const get_Services = async () => {
    const url = `http://localhost:8000/hotels/services/`;
    const { data } = await axios.get(url);
    setServices(data);
    return;
  };

  useEffect(() => {
    get_Services();
  }, []);

  return (
    <div className="text-center col-12">
      <div className="fontawsome">
        {services.map((service, index) => {
          console.log("service===>>>", service);
          console.log("index===>>>", index);
          return (
            <Service
              key={service.id}
              icon={icons[index]}
              title={service.name}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
