import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';

const Home = () => (
  <>
    <Header />
    <div className="home">
    <header className="hero">
        <h1 className="hero-heading">Welcome to KM Rent House</h1>
        <p className="hero-para">Your ideal rental home awaits. Discover the perfect property for your next stay.</p>
        <Link to="/properties" className="cta-button">Browse Rental Homes</Link>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Extensive Property Listings</h2>
          <p className="feature-para">Choose from a wide range of rental properties to suit all preferences and budgets. Whether you're looking for a quaint apartment in the city or a luxurious beachfront villa, we have something for everyone.</p>
        </div>
        <div className="feature">
          <h2>Seamless Booking Experience</h2>
          <p className="feature-para">Our platform is designed to make finding and booking your ideal rental property effortless. Detailed descriptions, photos, and reviews help you make an informed decision with confidence.</p>
        </div>
        <div className="feature">
          <h2>Outstanding Customer Service</h2>
          <p className="feature-para">Our dedicated support team is available to assist you at every step. From helping you select the right property to answering any queries, we ensure a smooth and enjoyable rental experience.</p>
        </div>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Search for Properties</h3>
            <p>Use our search tools to find properties that match your criteria. Filter by location, price, amenities, and more.</p>
          </div>
          <div className="step">
            <h3>2. View Property Details</h3>
            <p>Check out property descriptions, photos, and reviews to make sure it's the perfect fit for you.</p>
          </div>
          <div className="step">
            <h3>3. Book Your Stay</h3>
            <p>Reserve the property for your desired dates with our easy booking process. Secure your rental with just a few clicks.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Trusted by Thousands:</strong> Join a community of happy renters who have found their perfect home with us.</li>
          <li><strong>Verified Listings:</strong> We ensure all listings are verified and accurate, providing you peace of mind.</li>
          <li><strong>24/7 Customer Support:</strong> Our team is available around the clock to assist you with any questions or issues.</li>
          <li><strong>Competitive Prices:</strong> Get the best deals on rental properties without any hidden fees.</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"The booking process was straightforward, and the property matched the description perfectly. We had an amazing stay!"</p>
          <cite>- Alex M.</cite>
        </div>
        <div className="testimonial">
          <p>"Excellent selection of properties and top-notch customer service. I highly recommend this platform."</p>
          <cite>- Chris P.</cite>
        </div>
        <div className="testimonial">
          <p>"We found the ideal rental for our family vacation. The experience was completely hassle-free."</p>
          <cite>- Jessica T.</cite>
        </div>
      </section>

    </div>
  </>
);

export default Home;
