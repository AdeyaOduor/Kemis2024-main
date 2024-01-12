import React, { useState, useEffect } from 'react';
import './Header.css'; // Create a CSS file for styling if needed
import image6 from '../Slider/image6.png';
import image2 from '../Slider/image2.png';
import image3 from '../Slider/image3.png';

const slides = [
  {
    title: 'Slide 1',
    description: 'Welcome to KEMIS - Your Gateway to Educational Excellence!',
    link: '/about',
    image: image6,
    textPosition: 'left'
  },
  {
    title: 'Slide 2',
    description: 'Unlock the power of education data with KEMIS, the Ministry of Education\'s revolutionary Single Source of Truth.',
    link: '/about',
    image: image2,
  },
  {
    title: 'Slide 3',
    description: 'Your custom description for Slide 3.',
    link: '/about',
    image: image3,
  },
  // Add more slides as needed
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change the duration (in milliseconds) between slides as needed

    return () => clearInterval(interval);
  }, []);

  const headerStyle = {
    backgroundImage: `url(${slides[currentSlide].image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="header-slider" style={headerStyle}>
      <div className="overlay"> {/* Add an overlay div for better text visibility */}
        <div className="mx-auto max-w-2xl py-32 sm:py-12 lg:py-16 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">
            Kenya Education Management Information System (KEMIS)
          </h1>
          <p className="mt-6 text-lg leading-8">
            {slides[currentSlide].description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={slides[currentSlide].link}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn More
            </a>
            {/* Add other links or buttons here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
