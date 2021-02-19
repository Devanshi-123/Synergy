import React, { Component } from "react";
import {Link} from 'react-router-dom';

export function Carousel (){
    return (
       <div>      
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mindxmaster.s3.amazonaws.com/wp-content/uploads/2017/09/1_python.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/html-css-js-icon-set-web-development-logo-javascript-programming-symbol-154897294.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/2391/5185/articles/ULTIMATE_List_of_React_Blogs_and_Sites_that_Allow_Guest_Blogging_wallpaper_1600x.png?v=1564838086" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>   
    </div>
    );
}
