import React from "react";
import {Carousel} from './Carousel';
import Service from './Services';
import {Link} from 'react-router-dom';
import image1 from '../img/python.png';
import image2 from '../img/python.png';
import image3 from '../img/python.png';
import image4 from '../img/python.png';
import image5 from '../img/python.png';
import image6 from '../img/python.png';

export function Home(){
    const sections = ["Programming","Web Development","Machine Learning","Cloud Computing","Others"]
    return (
       <div>      
          <Carousel/>
          <Service 
          section={sections[0]}
          headers={["Data Structures", "Algorithms", "Competitive Programming","C++","JS","Java"]}
          images={[image1, image2, image3,image4,image5,image6]}
          paras={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing",
            "Lorem ipsum dolor sit amet, consectetur",
          ]}/>
          <Service 
          section={sections[1]}
          headers={["Data Structures", "Algorithms", "Competitive Programming","C++","JS","Java"]}
          images={[image1, image2, image3,image4,image5,image6]}
          paras={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing",
            "Lorem ipsum dolor sit amet, consectetur",
          ]}
          />
          <Service section={sections[2]}
            headers={["Data Structures", "Algorithms", "Competitive Programming","C++","JS","Java"]}
            images={[image1, image2, image3,image4,image5,image6]}
            paras={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing",
              "Lorem ipsum dolor sit amet, consectetur",
            ]}
          />
        <Service section={sections[3]}
          headers={["Data Structures", "Algorithms", "Competitive Programming","C++","JS","Java"]}
          images={[image1, image2, image3,image4,image5,image6]}
          paras={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing",
            "Lorem ipsum dolor sit amet, consectetur",
          ]}
        />
    </div>
    );
}
