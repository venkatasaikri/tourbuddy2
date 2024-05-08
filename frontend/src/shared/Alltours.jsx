import React, { useState, useEffect } from "react";
// import CommonSection from "../shared/CommonSection";
import "../styles/alltours.css";

import TourCard from "./../shared/TourCard";

import useFetch from "../components/hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Alltours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      {/* <CommonSection title={"All Tours"} /> */}

      <div className="Allcards ">
        {loading && <h4>Loading....</h4>}
        {error && <h4>{error}</h4>}

        {!loading && !error && (
          <div className="layout">
            {tours?.map((tour) => (
              <div key={tour._id} className="cardlayout">
                <TourCard tour={tour} />
                <img src="" alt="" />
              </div>
            ))}
          </div>
        )}
        <div className="toggoele">
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <div
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? "active__page" : "NEXT"}
              >
                <span className="btn">NEXT PAGE</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alltours;
