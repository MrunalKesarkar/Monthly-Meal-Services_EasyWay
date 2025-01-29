import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/header/header";
import MessView from "../../components/messview/MessView";
import {getMessesByCategory} from "../../services/mess";
//import { getMessesByCategory } from "../../services/mess"; // Update the service to fetch messes by category
//import {getMessesByCategory}

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
                <input
                    type="text"
                    placeholder="Search Mess"
                    className="search-input"
                    onChange={(e) => {
                        const query = e.target.value.toLowerCase();
                        const filteredMesses = messes.filter((mess) =>
                            mess.name.toLowerCase().includes(query)
                        );
                        setMesses(filteredMesses);
                    }}
                />
            </div>

            {/* Mess Categories */}
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

/* Add relevant CSS if needed */
