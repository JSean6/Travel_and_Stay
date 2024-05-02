// import React, { useState, useEffect } from 'react';

// const BookingForm = ({ onClose, title, price, duration }) => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [adults, setAdults] = useState(0);
//     const [children, setChildren] = useState(0);
//     const [totalPrice, setTotalPrice] = useState(0);

//     useEffect(() => {
//         if (startDate) {
//             const start = new Date(startDate);
//             const durationDays = parseInt(duration.split(' ')[0]); // Assumes format "X DAYS / Y NIGHTS"
//             const end = new Date(start.getTime() + durationDays * 24 * 60 * 60 * 1000);
//             setEndDate(end.toISOString().split('T')[0]);
//         }
//     }, [startDate, duration]);

//     useEffect(() => {
//         const priceNum = parseFloat(price.replace(/,/g, ''));
//         const total = (adults * priceNum) + (children * priceNum * 0.75);
//         setTotalPrice(total.toFixed(2));
//     }, [adults, children, price]);

//     return (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
//             <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
//                 <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
//                 <h2 className="text-lg font-bold mb-4">{title}</h2>
//                 <p className="mb-1"><strong>Price:</strong> Ksh {price}</p>
//                 <p className="mb-1"><strong>Duration:</strong> {duration}</p>
//                 <p className="mb-1"><strong>End Date:</strong> {endDate || 'Select a start date'}</p>

//                 <div className="mb-4">
//                     <label htmlFor="startDate" className="block mb-2">Start Date</label>
//                     <input type="date" id="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full border-gray-300 rounded-md p-2"/>
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Adults</label>
//                     <input type="number" value={adults} onChange={e => setAdults(parseInt(e.target.value) || 0)} className="w-full border-gray-300 rounded-md p-2"/>
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Children</label>
//                     <input type="number" value={children} onChange={e => setChildren(parseInt(e.target.value) || 0)} className="w-full border-gray-300 rounded-md p-2"/>
//                 </div>

//                 <div className="mb-4">
//                     <p><strong>Total Price:</strong> Ksh {totalPrice}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingForm; 