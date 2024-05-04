import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import maasaimara from '/src/assets/maasai-mara.jpg';
import diani from '/src/assets/maldives.jpg';
import dubai from '/src/assets/Dubai2.jpg';
import '../Slider.css';

function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={20000}>
                    <img src={maasaimara} className="img1" alt="Maasai Mara" />
                    <Carousel.Caption className="captionTopLeft">
                        <h3><strong>First slide label</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="moreInfoButton">More Info</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={20000}>
                    <img src={diani} className="img1" alt="Diani Beach" />
                    <Carousel.Caption className="captionTopLeft">
                        <h3><strong>Second slide label</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="moreInfoButton">More Info</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={20000}>
                    <img src={dubai} className="img1" alt="Dubai" />
                    <Carousel.Caption className="captionTopLeft">
                        <h3><strong>Third slide label</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="moreInfoButton">More Info</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="transitionEffect"></div>
        </>
    );
}

export default Slider;
