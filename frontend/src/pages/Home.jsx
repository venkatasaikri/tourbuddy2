import React from "react";
import Hero from "../shared/herosection/Hero.jsx";
import FeaturedTour from "../components/Featured-tours/FeaturedTour.jsx";


import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/*================ Hero Section start ========================*/}
      <Hero />
      {/*================ Hero Section end ========================*/}

      {/*================ featured Section start ========================*/}
      <section>
        <h2 className="featured__tour-title">OUR FEATURED TOURS</h2>
        <div className="layout">
          <FeaturedTour />
        </div>
      </section>

      {/*================ featured Section end ========================*/}



      {/*================ featured Section end ========================*/}
     
      {/*================ featured Section end ========================*/}


    </>
  );
};

export default Home;
