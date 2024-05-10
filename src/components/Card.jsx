import santorini from '/src/assets/santorini.jpg'
import zanzibar from '/src/assets/zanzibar.jpg'
import alps from '/src/assets/alps.jpg'
import maldives from '/src/assets/maldives.jpg'
import diani from '/src/assets/Diani.jpg'
import Maasai from '/src/assets/wildebeest.jpg' 

import { Link } from 'react-router-dom';

const Card = () => {
  const styles = {
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px 8px 0 0',
    }
  }
  const data = [
    {
      id: 2,
      title: "1. Santorini",
      image: "/src/assets/santorini.jpg",
      description: " Santorini, a gem of the Aegean, captivates with its cliff-top villages and dazzling sunsets.Its iconic blue-domed churches and whitewashed homes overlook volcanic beaches and an azure sea. Explore ancient ruins, sample exquisite Greek cuisine, and bask in the unique light that has inspired artists for centuries. A true paradise!"
    },
    {
      id: 3,
      title: "2. Zanzibar",
      image: "/src/assets/zanzibar.jpg",
      description: " Zanzibar, a paradise off the coast of Tanzania, enchants with its spice-scented streets and pristine beaches.Dive into crystal-clear waters teeming with vibrant marine life or wander through Stone Town's labyrinthine alleys steeped in history.With its blend of culture, adventure, and relaxation, Zanzibar beckons to the wanderlust soul."
    },
    {
      id: 4,
      title: "3. Swiss Alps",
      image: "src/assets/alps.jpg",
      description: " Nestled in Switzerland, the Swiss Alps stand as an epitome of natural grandeur.With snow-capped peaks, verdant valleys, and picturesque villages, this alpine paradise invites adventurers year-round. Whether skiing pristine slopes in winter or hiking breathtaking trails in summer, the Swiss Alps promise an unforgettable escape into nature's embrace. Explore this majestic wonderland and immerse yourself in its timeless beauty and tranquility."
    },
    {
      id: 5,
      title: "4. Maldives",
      image: "/src/assets/maldives.jpg",
      description: " Nestled in the Indian Ocean, the Maldives is a paradisiacal archipelago renowned for its pristine beaches, crystal-clear waters, and vibrant marine life. Each island boasts luxurious resorts, offering overwater bungalows and world-class amenities. Dive into the turquoise depths to discover colorful coral reefs and exotic fish, or simply unwind on the white sands and witness breathtaking sunsets. The Maldives promises an idyllic escape like no other."
    },
    {
      id: 6,
      title: "5. Diani",
      image: "/src/assets/Diani.jpg",
      description:"Nestled along Kenya's stunning coastline, Diani Beach offers a dreamy escape with its white sands and azure waters. Beyond sun-soaked shores, Diani boasts vibrant coral reefs for snorkeling and lush forests to explore. Indulge in fresh seafood at seaside cafes or unwind in luxury resorts. Diani promises a perfect blend of relaxation and adventure."
    },
    {
      id: 7,
      title: "6. Maasai Mara",
      image: "/src/assets/wildebeest.jpg",
      description:"Welcome to Maasai Mara, Kenya's iconic savannah teeming with wildlife. Embark on thrilling safaris to spot lions, elephants, and wildebeest in their natural habitat. The Maasai culture adds depth to this experience, with traditional villages and ceremonies to discover. Witness the Great Migration or enjoy a hot air balloon ride over the plains—Maasai Mara is a safari enthusiast's paradise."
    }
  ];
  return (
    <>
   <div className='card-container'>
   <div></div>
    <div className='mx-20 mt-8 bg-white rounded-lg '>
      <h1 className='text-xl font-bold text-red '>Welcome to SavannahSunsetTours' Traveller's Blog</h1>
    
    </div>
    <div className='grid grid-cols-1 sn:grid-cols-2 lg:grid-cols-2 gap-4 mx-20 mt-8 bg-white rounded-lg shadow-md p-8'>
      {data.map((blog) => (
        <><div key={blog.id} className='border p-4'>
          <div className='text-xl font-bold text-red'>{blog.title}</div>
          <div><img src={blog.image} style={styles.image}/></div>
          <div className='text-gray-700 mb-4'>{blog.description}</div>
        </div>
        </>
      ))}
    </div><div className='mx-20 mt-8 bg-white rounded-lg '>
    <h1 className='text-xl font-bold text-red '>Why SavannahSunsetTours?</h1>
      <p className='text-gray-700 mb-4'>"Traveling opens minds and hearts. At SavannahSunsetTours, we curate experiences that enrich and inspire. 
                                         With our expert guidance, personalized itineraries, and attention to detail, we ensure your journey is seamless and unforgettable. 
                                        Let's explore together."</p>
    </div>
   </div>
    </>
  );
};
export default Card;

