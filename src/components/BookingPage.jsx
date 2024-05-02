// BookingPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from './BookingForm2';

const BookingPage = () => {
  const location = useLocation();
  const { imageUrl, title, price, duration } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Your Trip</h1>
      <BookingForm title={title} price={price} duration={duration} />
    </div>
  );
};

export default BookingPage;
