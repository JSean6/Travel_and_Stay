import React, { useState, useEffect } from 'react';
import "../BookingPage.css"

const BookingForm = ({ title, name, price, duration, onClose }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (startDate) {
            const start = new Date(startDate);
            const formattedDate = new Date(startDate);
            const durationDays = parseInt(duration.split(' ')[0]); // "X DAYS / Y NIGHTS"
            const end = new Date(start.setDate(start.getDate() + durationDays));
            setEndDate(end.toDateString().toUpperCase().split('T')[0]);
        }
    }, [startDate, duration]);

    useEffect(() => {
        const basePrice = parseFloat(price.replace(/,/g, ''));
        const total = (adults * basePrice) + (children * basePrice * 0.75);
        setTotalPrice(total.toFixed(2));
    }, [adults, children, price]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Booking Submitted!\n\nDetails:\n - Trip: ${title}\n - Start Date: ${startDate}\n - End Date: ${endDate}\n - Adults: ${adults}\n - Children: ${children}\n - Total Price: Ksh ${totalPrice}`);
        // Reset Form or Close Form Logic Here
        setStartDate('');
        setEndDate('');
        setAdults(1);
        setChildren(0);
        if (onClose) onClose(); // If there's a callback to close the form
    };

    
    

    return (
        
        <form className="" onSubmit={handleSubmit} id='form'>
            <h2 className="text-xl font-bold mb-4">Booking: {title}</h2>
            <h2 className="text-xl font-bold mb-4">Hotel: {name}</h2>
            <h2 className="text-xl font-bold mb-4">Duration: {duration}</h2>
            <h2 className="text-xl font-bold mb-4">Price per person: {price}</h2>
            <div className="mb-4">
                <label className="block">Select Check in Date</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full border-gray-300 rounded-md p-2"/>
            </div>
            <div className="mb-4">
                <label className="block">Check out Date:</label>
                <input type="text" value={endDate} readOnly className="w-full border-gray-300 rounded-md p-2 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label className="block">Adults</label>
                <input type="number" value={adults} onChange={e => setAdults(parseInt(e.target.value) || 1)} className="w-full border-gray-300 rounded-md p-2"/>
            </div>
            <div className="mb-4">
                <label className="block">Children</label>
                <input type="number" value={children} onChange={e => setChildren(parseInt(e.target.value) || 0)} className="w-full border-gray-300 rounded-md p-2"/>
            </div>
            <div className="mb-4">
                <p><strong>Total Price:</strong> Ksh {totalPrice}</p>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit Booking
            </button>
        </form>
        
      
    );
};

export default BookingForm;
