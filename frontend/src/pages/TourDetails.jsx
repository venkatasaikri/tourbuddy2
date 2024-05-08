import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import useFetch from "./../components/hooks/useFetch";
import { BASE_URL } from "./../utils/config";
import {
  FaLocationArrow,
  FaRegStar,
  FaRegUserCircle,
  FaStar,
} from "react-icons/fa";
import "../styles/tourdetails.css";

import { AuthContext } from "./../context/AuthContext";
import { TbMapSearch } from "react-icons/tb";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext);

  //fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  //destructure properties from tour object
  const {
    photo,
    title,
    desc,
    // price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //fomate data
  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit request to server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("please signin");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        {loading && <h4 className="text-center pt-5">Loading.........</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
          <div className="tour_card">
            {/*=======================  Tour section start  ===========================*/}
            <div className="main_section">
              <div className="img_section">
              
                 
                <div className="box">
                <img className="img_tour" src={photo} alt="" />
                </div>

                <div className="tour_details">
                  <h1 className="tour_title">{title}</h1>
                  <div className="city_name">
                    <h4>
                      <FaLocationArrow />
                      {city}
                    </h4>
                    <span>
                      <i style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                  </div>

                  <div className="tour_info">
                    <ul>
                      <li>
                        <TbMapSearch />
                         {address}
                      </li>
                      <li>Maximun group people : <span className="max_people">{maxGroupSize} people</span></li>
                      <li>Total distance : <span className="max_people">{distance}k/m</span></li>
                    </ul>
                  </div>
                </div>
                
                

             
             
              </div>
            </div>
            {/*=======================  Tour section end  ===========================*/}

            {/*=======================  Tour Reviews section start  ===========================*/}
            <div className="tour__reviews">
              <h1 className="review_heading">Tour review section:</h1>

              <form onSubmit={submitHandler}>
                <div className="reviews_container">
                  <h4 className="Reviews">
                    Reviws ({reviews?.length} reviews)
                  </h4>
                  <div className="rating__group">
                    pick your rating:-
                    <span onClick={() => setTourRating(1)}>
                      {/* stars icon */}
                      <FaRegStar />
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      <FaRegStar />
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      <FaRegStar />
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      <FaRegStar />
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      <FaRegStar />
                    </span>
                  </div>
                </div>

                <div className="review__input">
                  <input
                    className="input_review"
                    type="text"
                    ref={reviewMsgRef}
                    placeholder="shere your thoughts"
                    required
                  />
                  <button className="btn_review" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              {/* tour reviews  */}
              <div className="user__reviews">
                {reviews?.map((review) => (
                  <div className="review__item">
                    <div>
                      <div>
                        <div>
                          <h5>
                            <div>
                              <span className="profile_icon">
                                <FaRegUserCircle />
                              </span>
                              {review.username}
                            </div>
                            <span className="rating">
                              {review.rating}
                              <FaStar />
                            </span>
                          </h5>
                          <p>
                            {/* latermodifies */}
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </p>
                        </div>
                      </div>
                      <h6>{review.reviewText}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="description">
                  <h2 className="description_heading">Description :</h2>
                  <p className="decription_paragraph">{desc}</p>
                </div>
            {/*=======================  Tour Reviews section end  ===========================*/}
          </div>
          
        )}
      </section>
    </>
  );
};

export default TourDetails;
