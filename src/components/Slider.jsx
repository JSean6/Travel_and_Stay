import React from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import maasaimara from '/src/assets/maasai-mara.jpg'
import diani from '/src/assets/maldives.jpg'
import dubai from '/src/assets/Dubai2.jpg'
import zanzibar from '/src/assets/Zanzibar3.jpg'
import travel from '/src/assets/home.jpg' 
import '../Slider.css'

function Slider (){
    return(
        <>
             <Carousel className="main-slide">
                <div>
                    <img src={maasaimara} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={diani} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={dubai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={zanzibar} /> 
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={travel} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    );
};

export default Slider;