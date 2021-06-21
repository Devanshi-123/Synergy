import React from "react";
import {Link} from 'react-router-dom'
// import installed libraries
import Carousel from "react-multi-carousel";

// import css of react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import "./Services.css";

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


const CardItem = ({ image, header, para,sec}) => {
  const one = sec.toLowerCase().replaceAll(' ','')
  const two = header.toLowerCase().replaceAll(' ','')
  return(
  <div className="box">
    <Link to={`/${one}/${two}`}>
    <div className="box-image">
      <img src={image} alt=""  style={{height:"180px"}} />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
    </Link>
  </div>
  );
};

const Service = ({ section, headers, images, paras}) => {
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
              sec={section}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Service;
