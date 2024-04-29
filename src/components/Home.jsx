import React from "react";
import '../Home.css'
import PackageCard from "./PackageCard";
// import maasaimara from '/src/assets/maasai-mara.jpg'
// import diani from '/src/assets/maldives.jpg'
// import dubai from '/src/assets/Dubai2.jpg'
// import zanzibar from '/src/assets/Zanzibar3.jpg'
// import travel from '/src/assets/home.jpg' 
import Slider from "./Slider";


function Home() {
    return (
        <>
            <Slider />
            <PackageCard />
        </>

    )
}

export default Home;

{/* <div className="slider">
<figure>
    <img src={maasaimara} />
    <img src={diani} />
    <img src={dubai} />
    <img src={zanzibar} />
    {/*  */}
//</figure>

// </div> */}