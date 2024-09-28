// src/components/Home.js
import React from 'react';
import hobbitHoleImage from '../image1.png'; // Adjust this path based on your actual image name
import shireSceneryImage from '../image2.png'; // Adjust this path based on your actual image name

const Home = () => {
  return (
    <div className="home-content">
      <h1>Welcome to the Shire</h1>
      <img src={hobbitHoleImage} alt="Hobbit Hole" className="home-image" />
      <p>
        Nestled in the heart of Middle-earth, the Shire is a place of peace and tranquility.
        Known for its rolling hills, lush gardens, and friendly hobbits, it is a haven for those
        seeking comfort and joy.
      </p>
      <img src={shireSceneryImage} alt="Shire Scenery" className="landscape-image" />
    </div>
  );
};

export default Home;