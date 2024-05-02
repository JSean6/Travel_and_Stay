import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import maasaimara from '/src/assets/maasai-mara.jpg'
import diani from '/src/assets/maldives.jpg'
import dubai from '/src/assets/Dubai2.jpg'
import zanzibar from '/src/assets/Zanzibar3.jpg'
import travel from '/src/assets/home.jpg' 
import '../Slider.css'
import Carousel from 'react-bootstrap/Carousel'

function Slider () {
        return (
            <>
            <Carousel>
              <Carousel.Item interval={20000}>
                <img src={maasaimara} className="img1"/>
                <Carousel.Caption className="text">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={20000}>
                <img src={diani} className="img1" />
                <Carousel.Caption className="text">
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={20000} className="img1">
                <img src={dubai} />
                <Carousel.Caption className="text">
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </>
        );
};

export default Slider;

//  <>
//              <Carousel className="main-slide">
//                 <div>
//                     <img src={maasaimara} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={diani} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={dubai} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src={zanzibar} /> 
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src={travel} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         </>