import React, { useReducer, useState } from 'react'; 
import { Routes, Route, useNavigate } from 'react-router-dom'; // 1. Imported useNavigate

import Header from './Header';
import About from './About';
import Specials from './Specials';         
import Testimonials from './Testimonials'; 
import BookingPage from './BookingPage'; 
import ConfirmedBooking from './ConfirmedBooking'; 

export function initializeTimes() {
  const today = new Date();
  return typeof window.fetchAPI === 'function' 
    ? window.fetchAPI(today) 
    : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return typeof window.fetchAPI === 'function' 
        ? window.fetchAPI(action.payload) 
        : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  
  // 1. UPDATE INITIAL STATE: Load existing bookings from Local Storage on startup
  const [bookingsList, setBookingsList] = useState(() => {
    const savedBookings = localStorage.getItem('littleLemonBookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });
  
  const navigate = useNavigate();

  // 2. UPDATE HANDLER: Write the new array list directly into Local Storage memory
  const addNewBooking = (newBooking) => {
    setBookingsList((prevBookings) => {
      const updatedBookings = [...prevBookings, newBooking];
      localStorage.setItem('littleLemonBookings', JSON.stringify(updatedBookings));
      return updatedBookings;
    });
  };

  const submitForm = (formData) => {
    const success = typeof window.submitAPI === 'function'
      ? window.submitAPI(formData)
      : true; 

    if (success) {
      addNewBooking(formData); 
      navigate('/confirmed');  
    }
  };

  return (
    <main className="container main-content">
      <Routes>
        <Route path="/" element={<><Header /><Specials /><Testimonials /></>} />
        <Route path="/about" element={<About />} />
        
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            bookingData={bookingsList}
            submitForm={submitForm} 
          />
        } />

        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;