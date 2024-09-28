// src/components/About.js
import React from 'react';
import bilboBagginsImage from '../image3.png'

const About = () => {
  return (
    <div className="about-content">
      <h1>About the Shire</h1>
      <p>
        The Shire is a peaceful region in Middle-earth, inhabited primarily by Hobbits.
        It is known for its beautiful landscapes, rich agricultural land, and a strong sense of community.
      </p>
      <img src={bilboBagginsImage} alt="Bilbo Baggins" className="shire-image" />
      <h2>Hobbit Culture</h2>
      <p>
        Hobbits are known for their love of comfort and good food. They enjoy simple pleasures such as
        gardening, celebrating festivals, and sharing stories over a hearty meal.
        The Shire is a place where time seems to stand still, allowing its inhabitants to live in harmony with nature.
      </p>
      <h2>Famous Hobbits</h2>
      <p>
        Notable Hobbits include Bilbo Baggins, who embarked on an unexpected adventure, and his nephew Frodo Baggins,
        who carried the One Ring on a quest to save Middle-earth. Their stories are woven into the rich tapestry of Hobbiton.
      </p>
    </div>
  );
};

export default About;