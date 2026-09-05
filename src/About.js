import React from 'react';

const About = () => {
  return (
    <section className="aboutContainer">
      <div className="aboutContent">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="description">
          Little Lemon is a charming neighborhood bistro that serves simple food and 
          classic cocktails in a lively but casual environment. The restaurant features a 
          locally sourced menu with daily specials.
        </p>
      </div>
      
      <div className="imageGallery">
        {/* Cooking photo on the bottom-left layer */}
        <img 
          src="/marioandadrian.jpg" 
          alt="Little Lemon chefs prep work" 
          className="aboutImage imageBottom" 
        />
        {/* Laughing photo on the top-right layer */}
        <img 
          src="/marioandadrianb.jpg" 
          alt="Little Lemon owners laughing" 
          className="aboutImage imageTop" 
        />
      </div>
    </section>
  );
};

export default About;