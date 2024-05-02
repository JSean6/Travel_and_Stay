import React, { useState, useEffect } from 'react';

const BookingForm = ({ title, price, duration }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (startDate) {
            const start = new Date(startDate);
            const durationDays = parseInt(duration.split(' ')[0]); // "X DAYS / Y NIGHTS"
            const end = new Date(start.setDate(start.getDate() + durationDays));
            setEndDate(end.toISOString().split('T')[0]);
        }
    }, [startDate, duration]);

    useEffect(() => {
        const basePrice = parseFloat(price.replace(/,/g, ''));
        const total = (adults * basePrice) + (children * basePrice * 0.75);
        setTotalPrice(total.toFixed(2));
    }, [adults, children, price]);

    return (
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-bold mb-4">Booking: {title}</h2>
            <div className="mb-4">
                <label className="block">Start Date</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full border-gray-300 rounded-md p-2"/>
            </div>
            <div className="mb-4">
                <label className="block">End Date</label>
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
        </div>
    );
};

export default BookingForm;
