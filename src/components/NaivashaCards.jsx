
import React from 'react';
import Lodge from '/src/assets/Lodge.jpg';
import resort from '/src/assets/resort.jpg';
import valleylodge from '/src/assets/valleylodge.jpg';
import hotel from '/src/assets/hotel.jpg';
import sawelalodge from '/src/assets/sawelalodge.jpg';

const BookingForm = ({ selectedCard }) => {
  const [startDate, setStartDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1); // Default number of adults
  const [numChildren, setNumChildren] = useState(0); // Default number of children

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleAdultsChange = (event) => {
    setNumAdults(parseInt(event.target.value) || 0);
  };

  const handleChildrenChange = (event) => {
    setNumChildren(parseInt(event.target.value) || 0);
  };

  const calculateEndDate = () => {
    const { duration } = selectedCard;
    const [days, nights] = duration.split(' / ');
    const numDays = parseInt(days.split(' ')[0]);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + numDays);
    return endDate.toISOString().split('T')[0];
  };

  const calculateTotalPrice = () => {
    const { price } = selectedCard;
    const adultPrice = parseInt(price.replace(/,/g, '')); // Remove commas in price and parse as integer
    const childPrice = 0.75 * adultPrice; // Assuming children's price is 75% of adult's price
    return (numAdults * adultPrice) + (numChildren * childPrice);
  };

  return (
    <div className="border p-4 rounded-md bg-gray-100 mt-4">
      <h2 className="text-lg font-semibold mb-2">Book {selectedCard.title}</h2>
      <div className="flex flex-col gap-4">
        <label htmlFor="startDate" className="font-semibold">Start Date:</label>
        <input
          type="date"
          id="startDate"
          onChange={handleStartDateChange}
          className="border rounded-md p-2"
        />

        <label htmlFor="numAdults" className="font-semibold">Number of Adults:</label>
        <input
          type="number"
          id="numAdults"
          min="1"
          value={numAdults}
          onChange={handleAdultsChange}
          className="border rounded-md p-2"
        />

        <label htmlFor="numChildren" className="font-semibold">Number of Children:</label>
        <input
          type="number"
          id="numChildren"
          min="0"
          value={numChildren}
          onChange={handleChildrenChange}
          className="border rounded-md p-2"
        />

        {startDate && (
          <p className="font-semibold">End Date: {calculateEndDate()}</p>
        )}

        <p className="font-semibold">Total Price: Ksh {calculateTotalPrice()}</p>
      </div>
    </div>
  );
};


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
  return (
    <>
     
      <div style={styles.card}>
        <img src={imageUrl} alt={title} style={styles.image} />
        <div style={styles.info}>
          <p>{duration}</p>
          <p className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{title}</p>
          <p style={styles.price}>From: Ksh {price}</p>
          <p style={styles.location}>Location: {location}</p>
          {/* <button style={styles.button}>MORE INFO</button> */}
        </div>
      </div>
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
