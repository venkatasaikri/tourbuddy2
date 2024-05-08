import React from "react";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import '../styles/home.css'

import "./tour-card.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    
      <section className="main continer section realsection">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Popular Destination</h3>
      </div>
    
    <div className="secContent" >
      <div className="singleDestination">
        {/* image start */}
        <div className="imageDiv">
          <img src={photo} alt="" />
        </div>
        {/* image end */}

        <div className="cardInfo">
        
          <span className="contienet flex">
          <HiOutlineLocationMarker className="icon" />
          <h4 className="destTitle"> {city} </h4>
          {/* {featured && <span>Featured</span>} */}
          </span>
          
          <div className="fees flex">
            <div className="grade">
            <h5>
              <Link to={`/tours/${_id}`}>{title}</Link>
              </h5>
            </div>
            <div className="price">
             
              <span>
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "Not rated"
                ) : (
                <span>({reviews.length})</span>
                )}
              </span>
            </div>
          </div>
          
          <Link className="btn_more" to={`/tours/${_id}`}>
              <button className="btn flex">
              More Details<LuClipboardCheck className="icon" />
              </button>
          </Link>
        </div>
      </div>
    </div>
    </section>
    
    
  );
};

export default TourCard;
