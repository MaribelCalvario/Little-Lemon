import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, bookingData, submitForm }) {
    return (
        <div style={{ padding: '40px 0px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: '#F4CE14', fontFamily: 'Markazi Text' }}>Reserve a Table at Little Lemon</h1>
            <p>Please fill out the form below to secure your seating.</p>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                bookingData={bookingData}
                submitForm={submitForm}
                className="booking-form"
            />
            
            <p style={{ marginTop: '20px' }}>   **For parties larger than 10, please call our restaurant directly at (123) 456-7890.</p>
        </div>
        </div>
    );
}

export default BookingPage;