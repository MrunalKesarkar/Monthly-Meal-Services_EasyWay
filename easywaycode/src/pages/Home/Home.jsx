import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/header/header";
import MessView from "../../components/messview/MessView";
import axios from "axios";
import { config } from "../../services/config"; // Import config to get the server URL

const Home = () => {
    const [messes, setMesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMesses = async () => {
            try {
                const response = await axios.get(`${config.serverUrl}/api/messes`); // Replace with your actual API endpoint
                setMesses(response.data || []);
            } catch (err) {
                setError("Failed to load messes.");
            } finally {
                setLoading(false);
            }
        };

        fetchMesses();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Navbar />
            <Header />

            {/* Tiffin Slider */}
            <div className="tiffin-slider">
                <button className="slider-btn">{"<"}</button>
                <div className="slider-images">
                    <img src="/images/tiffin1.jpg" alt="Tiffin 1" className="tiffin-image" />
                    <img src="/images/tiffin2.jpg" alt="Tiffin 2" className="tiffin-image" />
                    <img src="/images/tiffin3.jpg" alt="Tiffin 3" className="tiffin-image" />
                </div>
                <button className="slider-btn">{">"}</button>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="Search Mess" className="search-input" />
            </div>

            {/* Mess Categories */}
            <div className="categories">
                <button className="category-btn veg">Veg</button>
                <button className="category-btn nonveg">Non-Veg</button>
            </div>

            {/* Mess View */}
            <MessView messes={messes} />

            {/* Footer */}
            <footer className="footer">
                <p>Contact Us: +91 1234567890 | easyway@example.com</p>
                <p>&copy; 2025 Easy Way. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Home;


/*
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/header/header";
import MessView from "../../components/messview/messview";

import { getMessesByCategory } from "../../services/mess"; // Import the new service function

const Home = () => {
    const [messes, setMesses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const categories = ["All", "Veg", "Non-Veg", "North Indian", "South Indian", "Healthy"];

    useEffect(() => {
        const fetchMesses = async () => {
            try {
                const messData = await getMessesByCategory(selectedCategory);
                setMesses(messData || []);
            } catch (err) {
                setError("Failed to load messes.");
            } finally {
                setLoading(false);
            }
        };

        fetchMesses();
    }, [selectedCategory]);

    const handleSearch = (query) => {
        const filteredMesses = messes.filter((mess) =>
            mess.name.toLowerCase().includes(query.toLowerCase())
        );
        setMesses(filteredMesses);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Navbar />
            <Header />

            //Tiffin Slider 
            <div className="tiffin-slider">
                <button className="slider-btn">{"<"}</button>
                <div className="slider-images">
                    <img src="/images/tiffin1.jpg" alt="Tiffin 1" className="tiffin-image" />
                    <img src="/images/tiffin2.jpg" alt="Tiffin 2" className="tiffin-image" />
                    <img src="/images/tiffin3.jpg" alt="Tiffin 3" className="tiffin-image" />
                </div>
                <button className="slider-btn">{">"}</button>
            </div>

            // Search Bar 
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Mess"
                    className="search-input"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            // Mess Categories
            <div className="categories">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-btn ${category.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            // Mess View 
            <MessView messes={messes} />

            // Footer 
            <footer className="footer">
                <p>Contact Us: +91 1234567890 | easyway@example.com</p>
                <p>&copy; 2025 Easy Way. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Home;

*/