import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pixabayGallery.css";

const PixabayGallery = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=23759956-de4e70b26ff53a3bf75cc79c6&q=${searchText}&image_type=photo&page=1&category=places`
        );
        if (response.data.hits.length === 0) {
          alert("No images found for the search term.");
        } else {
          setImages(response.data.hits);
          setPage(2); // Reset page to 2 after new search
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    } else {
      alert("Please enter a search term");
    }
  };

  const loadMoreImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=23759956-de4e70b26ff53a3bf75cc79c6&q=${searchText}&image_type=photo&page=${page}&category=places`
      );
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
      setPage((prevPage) => prevPage + 1); // Increment page number
      setLoading(false);
    } catch (error) {
      console.error("Error fetching more images:", error);
      setLoading(false);
    }
  };

  return (
    <section className="pixabay-gallery">
      <h1 className="text_img">Search your favorate place here</h1>
      <div className="search-container" data-aos="fade-up">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="grid-container">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            className="image grid-item"
          />
        ))}
      </div>

      {loading && <p>Loading...</p>}

      {images.length > 0 && (
        <div className="button-container">
          <button onClick={loadMoreImages}>Load More</button>
        </div>
      )}
    </section>
  );
};

export default PixabayGallery;
