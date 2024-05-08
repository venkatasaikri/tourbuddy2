
import React from 'react'
import TourCard from '../../shared/TourCard';


import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTour = () => {

    const {
        data: featuredTours,
        loading,
        error,
      } = useFetch(`${BASE_URL}/tours/search/FeaturedTours`);
    
      console.log(featuredTours);

  return (
    <>
    {loading && <h4>Loading..............</h4>}
    {error && <h4>{error}</h4>}

    {!loading &&
      !error &&
      featuredTours?.map((tour) => (
        <div key={tour._id}>
          <TourCard tour={tour} />
        </div>
      ))}
  </>
  )
}

export default FeaturedTour