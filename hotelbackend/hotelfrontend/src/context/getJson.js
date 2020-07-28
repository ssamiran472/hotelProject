import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const HotelContext = createContext();

const URL = "http://127.0.0.1:8000/hotels/";

const ContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const { data } = await axios.get(URL);
    setData(data);
  };
  useEffect(() => {
    getPosts();
    console.log("from useEffect ...", data);
  }, []);
  return (
    <HotelContext.Provider value={{ data, loading }}>
      {props.children}
    </HotelContext.Provider>
  );
};

export default ContextProvider;
