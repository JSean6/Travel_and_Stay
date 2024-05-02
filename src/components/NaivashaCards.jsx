import React,{useState} from 'react';
import BookingForm from './Bookingform';


const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    width: '300px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  },
  info: {
    padding: '20px',
  },
  price: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffa500',
    color: '#fff',
    border: 'none',
    padding: '',
    borderRadius: '20px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingTop: '2px',
  },
  duration: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  location: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  }
};

const Card = ({ imageUrl, title, price, duration, location }) => {

  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleBookingForm = () => setShowBookingForm(!showBookingForm);

  return (
    <>
     
      <div style={styles.card}>
        <img src={imageUrl} alt={title} style={styles.image} />
        <div style={styles.info}>
          <p>{duration}</p>
          <p className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{title}</p>
          <p style={styles.price}>From: Ksh {price}</p>
          <p style={styles.location}>Location: {location}</p>
          <button style={styles.button} onClick={toggleBookingForm}>Book Now</button>
        </div>
      </div>
      {showBookingForm && (
                <BookingForm
                    title={title}
                    price={price}
                    duration={duration}
                    onClose={() => setShowBookingForm(false)}
                />
            )}
    </>
  );
};

const CardList2 = () => {
  const cardsData = [
    { imageUrl: '/src/assets/Lodge.jpg', title: 'WILDLIFE/SAFARI TOURISM PACKAGE', price: '12,999.00', duration: "3 DAYS / 2 NIGHTS", location: "Naivasha" },
    { imageUrl: '/src/assets/resort.jpg', title: 'ADVENTURE TOURISM PACKAGE', price: '33,000.00', duration: "4 DAYS / 3 NIGHTS", location: "Naivasha"  },
    { imageUrl: '/src/assets/valleylodge.jpg', title: '2024 DEALS', price: '37,000.00', duration: "5 DAYS / 4 NIGHTS", location: "Naivasha"  },
    { imageUrl: '/src/assets/hotel.jpg', title: 'HONEYMOON TOURISM PACKAGE', price: '30,000.00', duration: "4 DAYS / 3 NIGHTS", location: "Naivasha"  },
    { imageUrl: '/src/assets/sawelalodge.jpg', title: 'GUESTHOUSE TOURISM PACKAGE', price: '50,000.00', duration: "4 DAYS / 3 NIGHTS", location: "Naivasha"  }
  ];

  return (
    <div style={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} title={card.title} price={card.price} duration={card.duration} location={card.location} />
      ))}
    </div>
  );
};

export default CardList2;
