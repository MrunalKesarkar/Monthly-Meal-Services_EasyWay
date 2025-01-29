import React from 'react';
import './AboutUsPage.css'; // Import CSS for styling
import Navbar from '../../components/Navbar/navbar';

const AboutUsPage = () => {
  return (
    <div className='container-fluid'>
        <Navbar/>
        <br />
    <div className="about-us-page">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            At Bookly.io, our mission is to make reading accessible and enjoyable for everyone. 
            We believe in the power of books to inspire, educate, and transform lives. Our goal is to provide a diverse selection of books at competitive prices, 
            accompanied by exceptional customer service.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, Bookly.io was created out of a love for reading and a desire to build a community around books. 
            What started as a small team with a vision to revolutionize the way people buy books has grown into a thriving online bookstore. 
            We are dedicated to bringing you the latest releases, bestsellers, and timeless classics from around the world.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Extensive Collection: From the latest bestsellers to rare finds, our collection has something for every reader.</li>
            <li>Competitive Prices: We offer competitive prices and regular discounts to ensure you get the best value for your money.</li>
            <li>Exceptional Service: Our customer service team is dedicated to providing you with a seamless shopping experience.</li>
            <li>Community Focused: We support local authors and promote community events related to reading and literature.</li>
          </ul>
        </div>
        <div className="about-us-section">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! You can reach us at:
            <br />
            <strong>Email:</strong> support@bookly.io
            <br />
            <strong>Phone:</strong> +1 (123) 456-7890
            <br />
            <strong>Address:</strong> 123 Book Lane, Karad, MH 12345
          </p>
        </div>
      </section>
      <footer className="about-us-footer">
        <p>&copy; 2024 Bookly.io. All rights reserved.</p>
      </footer>
    </div>
    <br />
    </div>
  );
};

export default AboutUsPage;
