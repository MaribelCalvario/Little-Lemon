import React from 'react'; 
import BookingForm from './BookingForm'; 

function BookingPage({ availableTimes, dispatch, bookingData, submitForm }) {
    return (
        // 1. Swapped <main> for <div> to avoid nested main landmark errors
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Reserve a Table at Little Lemon</h1>
            <p>Please fill out the form below to secure your seating.</p>
            
            {/* 2. Hand off the submitForm prop into the BookingForm */}
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                bookingData={bookingData}
                submitForm={submitForm}
                className="booking-form"
            />
            
            <p style={{ marginTop: '20px' }}>For parties larger than 10, please call our restaurant directly.</p>
        </div>
    );
}

export default BookingPage;