import React from "react";
// import installed libraries
import Carousel from "react-multi-carousel";

// import css of react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import "./Services.css";

// importing images
import image1 from '../img/python.png';
import image2 from '../img/python.png';
import image3 from '../img/python.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CardItem = ({ image, header, para }) => (
  <div className="box">
    <div className="box-image">
      <img src={image} alt="" />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
  </div>
);

const Service = ({ section, headers, images, paras }) => {
  return (
    <div>
      <h1 className="headings">{section}</h1>
      <Carousel className="block" responsive={responsive}>
      {headers.map((header, index) => {
          return (
            <CardItem
              key={index}
              header={header}
              image={images[index]}
              para={paras[index]}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Service;
