import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";


const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <section>
        <section>
          <div>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <div className="layout" key={tour._id}>
                  <TourCard tour={tour} />
                </div>
              ))
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default SearchResultList;
