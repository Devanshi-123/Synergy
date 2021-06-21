import React,{useEffect,useState} from "react";
import {Carousel} from './Carousel';
import Service from './Services';
import {Link} from 'react-router-dom';
import axios from 'axios';
import c from '../img/c++.jpg';
import ds from '../img/datastructure.jpg';
import cp from '../img/cp.jpg';
import algo from '../img/algo.png';
import other from '../img/other.jpg';
import css from '../img/css.jpg';
import js from '../img/js.png';
import react from '../img/react.jpg';
import mern from '../img/mern.jpg';
import ml from '../img/ml.jpeg';
import dl from '../img/dl.jpeg';
import mlwb from '../img/mlwb.png';
import aws from '../img/aws.png';
import gcp from '../img/gcp.png';
import azure from '../img/azure.png';
import heroku from '../img/heroku.png';
import os from '../img/os.png';
import oops from '../img/oops.jpg';
import dbms from '../img/dbms.png';
import cn from '../img/cn.jpg';
import python from '../img/python.png';
import app from '../img/app.jpg';
import docker from '../img/docker.png';
import git from '../img/git.png';

export function Home(){
  //to get all users
  /*const [people,setPeople] = useState({})
    useEffect(async() => {
      console.log("Inside home effect")
      const { data } = await axios.get('/auth/')
      console.log(data)
      setPeople(data)
    }, [5])*/
    //to get all resources
    const sections = ["Data Structure Algorithm","Web Development","Data Science","Cloud","Gate Subject","Others"]
    return (
       <div>      
          <Carousel/>
          <Service 
          section={sections[0]}
          headers={["DataStructure", "Algorithms", "Competitive Programming","C++","Other"]}
          images={[ds,algo,cp,c,other]}
          paras={[
          ]}/>
          <Service 
          section={sections[1]}
          headers={["ReactJS", "MERN", "CSS","JS","Other"]}
          images={[react,mern,css,js,other]}
          paras={[
          ]}
          />
          <Service section={sections[2]}
            headers={["Machine Learning","Deep Learning","MLwithWeb","Python","Other"]}
            images={[ml,dl,mlwb,python,other]}
            paras={[
            ]}

          />
        <Service section={sections[3]}
          headers={["AWS","Heroku","GCP","Azure","other"]}
          images={[aws,heroku,gcp,azure,other]}
          paras={[
          ]}
        />
          <Service section={sections[4]}
          headers={["OS","DBMS","Oops","Computer Network","other"]}
          images={[os,dbms,oops,cn,other]}
          paras={[
          ]}
        />
         <Service section={sections[5]}
          headers={["App Development","Docker","Git","other"]}
          images={[app,docker,git,other]}
          paras={[
          ]}
        />
    </div>
    );
}
