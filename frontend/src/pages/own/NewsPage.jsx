import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import CSS file
import loadingIcon from './loading.svg'; // Import loading animation

const News = () => {
    const [location, setLocation] = useState('');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: location + ' tourism',
                        sortBy: 'publishedAt',
                        page: page,
                        apiKey: 'f10ca9d30fd24cd885bda2beb1d9ffee' // Replace 'YOUR_API_KEY' with your actual API key
                    }
                });
                setNews(prevNews => [...prevNews, ...response.data.articles]);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError(error.message);
            }
            setLoading(false);
        };

        if (location) {
            fetchNews();
        }
    }, [location, page]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNews([]);
        setPage(1);
        const formData = new FormData(e.target);
        setLocation(formData.get('location'));
    };

    const loadMore = () => {
        setPage(page => page + 1);
    };

    return (
        <div className="news-container">
            <h2 className='heading'>Tourism News</h2>
           <p className='paragraph' data-aos="fade-left">(Search your turisum news of the day in Favorate place)</p>
            <form className='search_place' onSubmit={handleSubmit}>
                <input className="search-input" type="text" name="location" placeholder="Enter location" />
                <button className="search-button" type="submit">Search</button>
            </form>
            {loading && <img src={loadingIcon} alt="Loading" className="loading-icon" />} {/* Loading animation */}
            {error && <p>Error fetching news: {error}</p>}
            <ul className="news-grid">
                {news.map((article, index) => (
                    <li key={index} className="news-item">
                        <h3>{article.title}</h3>
                        {article.urlToImage && <img src={article.urlToImage} alt="Article" className="news-image" />}
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
            <button className="load-more" onClick={loadMore}>Load More</button>
        </div>
    );
};

export default News;
