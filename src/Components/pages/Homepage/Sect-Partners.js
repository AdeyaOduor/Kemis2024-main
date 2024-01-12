import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logonhif from "../../Assets/nhif.png";
import logokicd from "../../Assets/kicd.png";
import logotwb from "../../Assets/twb.png";
import logomohk from "../../Assets/mohk.png";
import logoknec from "../../Assets/knec.png";

const partnerLogos = [logonhif, logokicd, logoknec, logotwb, logomohk];

const SectPartners = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // set the speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-semibold leading-8 text-gray-900">
          Our Partners
        </h2>
        <div className="mx-auto mt-10">
          <Slider {...sliderSettings}>
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="max-h-12 w-full object-contain"
                src={logo}
                alt={`Partner Logo ${index + 1}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectPartners;
