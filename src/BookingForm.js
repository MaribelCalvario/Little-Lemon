import React, { useState } from 'react';

// 1. Accept the submitForm prop (remove onAddBooking from parameters)
function BookingForm({ availableTimes, dispatch, bookingData, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        const selectedDateStr = e.target.value;
        setDate(selectedDateStr);
        const dateObject = new Date(selectedDateStr);
        dispatch({ type: 'UPDATE_TIMES', payload: dateObject });
    };

    // 2. STEP 2 REQUIREMENT: Update the button submit event handler to call submitForm
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        
        // Call the parent function passed via props
        submitForm(formData); 
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>{timeOption}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} required />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <button type="submit" aria-label="On Click confirm your reservation">Make Your Reservation</button>
            </form>

            {/* Historical data tracking table grid layout stays here */}
            {bookingData.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Current Bookings Queue</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '10px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #333' }}>
                                <th style={{ padding: '8px' }}>Date</th>
                                <th style={{ padding: '8px' }}>Time</th>
                                <th style={{ padding: '8px' }}>Guests</th>
                                <th style={{ padding: '8px' }}>Occasion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingData.map((booking, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                                    <td style={{ padding: '8px' }}>{booking.date}</td>
                                    <td style={{ padding: '8px' }}>{booking.time}</td>
                                    <td style={{ padding: '8px' }}>{booking.guests}</td>
                                    <td style={{ padding: '8px' }}>{booking.occasion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BookingForm;