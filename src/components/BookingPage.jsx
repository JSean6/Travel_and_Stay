import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from './BookingForm';
import "../BookingPage.css"

const BookingPage = () => {
  const location = useLocation();
  const { imageUrl, name, title, price, duration, } = location.state;

  return (
    <section className='book'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-orange-400">Book Your Trip</h1>
      <BookingForm image={imageUrl} name={name} title={title} price={price} duration={duration} />
    </div>
    </section>
  );
};

export default BookingPage;
