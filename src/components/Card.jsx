import santorini from '/src/assets/santorini.jpg'
import zanzibar from '/src/assets/zanzibar.jpg'
import alps from '/src/assets/alps.jpg'
import maldives from '/src/assets/maldives.jpg'

import '../Card.css'
function Card() {
    return (
        <section>
            <div className="card">

                <h2>Santorini</h2>
                <img src={santorini} className='cardimage'></img>
                <p>Santorini, a gem of the Aegean, captivates with its cliff-top villages and dazzling sunsets.
                    Its iconic blue-domed churches and whitewashed homes overlook volcanic beaches and an azure sea.
                    Explore ancient ruins, sample exquisite Greek cuisine, and bask in the unique light that has inspired artists for centuries.
                    A true paradise!</p>
                <button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">Book a Holiday!</button>
            </div>
            <div className="card">

                <h2>Zanzibar</h2>
                <img src={zanzibar} className='cardimage'></img>
                <p>Zanzibar, a paradise off the coast of Tanzania, enchants with its spice-scented streets and pristine beaches.
                    Dive into crystal-clear waters teeming with vibrant marine life or wander through Stone Town's labyrinthine alleys steeped in history.
                    With its blend of culture, adventure, and relaxation, Zanzibar beckons to the wanderlust soul.</p>
                <button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">Book a Holiday!</button>
            </div>
            <div className="card">

                <h2>Swiss Alps</h2>
                <img src={alps} className='cardimage'></img>
                <p>Nestled in Switzerland, the Swiss Alps stand as an epitome of natural grandeur.
                 With snow-capped peaks, verdant valleys, and picturesque villages, this alpine paradise invites adventurers year-round. 
                 Whether skiing pristine slopes in winter or hiking breathtaking trails in summer, the Swiss Alps promise an unforgettable escape into nature's embrace.
                  Explore this majestic wonderland and immerse yourself in its timeless beauty and tranquility.</p>
                <button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">Book a Holiday!</button>
            </div>
            <div className="card">

<h2>Maldives</h2>
<img src={maldives} className='cardimage'></img>
<p>Nestled in the Indian Ocean, the Maldives is a paradisiacal archipelago renowned for its pristine beaches, 
    crystal-clear waters, and vibrant marine life. Each island boasts luxurious resorts, offering overwater bungalows and world-class amenities.
     Dive into the turquoise depths to discover colorful coral reefs and exotic fish, or simply unwind on the white sands and witness breathtaking sunsets. 
     The Maldives promises an idyllic escape like no other.</p>
<button className="font-serif bg-blue-900 text-center mt-4 text-slate-50 hover:text-gray-300 border border-orange-500 rounded-lg">Book a Holiday!</button>
</div>


        </section>
    )
}

export default Card;