import React from 'react';
import giraffes from '/src/assets/giraffe.jpg';
import elephant from '/src/assets/elephant.jpg';
import lions from '/src/assets/elephant.jpg';
import hotair from '/src/assets/hotair.jpg';

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
  }
};

const Card = ({ imageUrl, title, price, duration }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.info}>
        <p>{duration}</p>
        <p>{title}</p>
        <p style={styles.price}>From: Ksh {price}</p>
        {/* <button style={styles.button}>MORE INFO</button> */}
      </div>
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    { imageUrl: '/src/assets/giraffe.jpg' , title: 'WILDLIFE/SAFARI TOURISM PACKAGE', price: '12,999.00', duration: "3 DAYS / 2 NIGHTS" },
    { imageUrl: '/src/assets/elephant.jpg' , title: 'ADVENTURE TOURISM PACKAGE', price: '33,000.00', duration: "4 DAYS / 3 NIGHTS" },
    { imageUrl: '/src/assets/elephant.jpg' , title: '2024 DEALS', price: '37,000.00', duration: "5 DAYS / 4 NIGHTS" },
    { imageUrl: '/src/assets/hotair.jpg' , title: 'HONEYMOON TOURISM PACKAGE', price: '30,000.00', duration: "4 DAYS / 3 NIGHTS" }
  ];

  return (
    <div style={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} title={card.title} price={card.price} duration={card.duration} />
      ))}
    </div>
  );
};

export default CardList;
