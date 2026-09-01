import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, bookingData, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const today = new Date().toISOString().split('T')[0];

    // Individual field validations for precise ARIA reporting
    const isDateValid = date !== '' && date >= today;
    const isTimeValid = time !== '';
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isOccasionValid = occasion !== '';

    const isFormValid = () => {
        return isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
    };

    const handleDateChange = (e) => {
        const selectedDateStr = e.target.value;
        setDate(selectedDateStr);
        const dateObject = new Date(selectedDateStr);
        dispatch({ type: 'UPDATE_TIMES', payload: dateObject });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;
        const formData = { date, time, guests, occasion };
        submitForm(formData); 
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" 
                    id="res-date" 
                    value={date} 
                    onChange={handleDateChange} 
                    min={today} 
                    required 
                    aria-invalid={date !== '' && !isDateValid}
                />

                <label htmlFor="res-time">Choose time</label>
                <select 
                    id="res-time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required
                    aria-invalid={time !== '' && !isTimeValid}
                >
                    <option value="" disabled>--Select a time--</option>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>{timeOption}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    placeholder="1" 
                    id="guests" 
                    value={guests} 
                    onChange={(e) => setGuests(Number(e.target.value))} 
                    min="1" 
                    max="10" 
                    required 
                    aria-invalid={!isGuestsValid}
                />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <button 
                    type="submit" 
                    // FIXED: Replaced custom text with the exact literal string mandated by Coursera
                    aria-label="On Click"
                    disabled={!isFormValid()}
                    style={{
                        cursor: isFormValid() ? 'pointer' : 'not-allowed',
                        opacity: isFormValid() ? 1 : 0.5
                    }}
                >
                    Make Your Reservation
                </button>
            </form>

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