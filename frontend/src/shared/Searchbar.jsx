import React, { useEffect, useRef } from "react";

import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";


import { BASE_URL } from "../utils/config";

import { useNavigate } from "react-router-dom";


import Aos from "aos";

const Searchbar = () => {
  //react hooks for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <form action="">
      <div data-aos="fade-up" className="cardDiv grid">
        <div className="distinationInput">
          <label htmlFor="city">Search your destination</label>
          <div className="input flex">
            <input
              className="inp"
              type="text"
              placeholder="Enter name here...."
              ref={locationRef}
            />
            <GrLocation className="icon" />
          </div>
        </div>

        <div className="dateInput">
          <label htmlFor="date">Distance:</label>
          <div className="input flex">
            <input
              className="inp"
              type="number"
              placeholder="Distance k/m"
              ref={distanceRef}
            />
          </div>
        </div>

        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max Gourp Size:</label>
          </div>
          <div className="input flex">
            <input
              className="inp"
              type="number"
              placeholder="0"
              ref={maxGroupSizeRef}
            />
          </div>
        </div>

        <div
          className="searchoptions flex"
          type="submit"
          onClick={searchHandler}
        >
          <HiFilter className="icon" />
          <span>Search</span>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
