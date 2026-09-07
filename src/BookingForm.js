import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, bookingData, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const today = new Date().toISOString().split('T')[0];

    
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

                <button className="reserve-btn"
                    type="submit" 
                    aria-label="On Click"
                    disabled={!isFormValid()}
                    style={{
                        cursor: isFormValid() ? 'pointer' : 'not-allowed',
                        opacity: isFormValid() ? 1 : 0.5
                    }}
                >
                    Reserve a Table
                </button>
            </form>

            {bookingData.length > 0 && (
            <section className="bookings-section-wrapper" style={{ backgroundColor: '#495E57', padding: '20px'}}>
            
                <div className="container" style={{ marginTop: '20px' }}>
                    <h2 style={{ color: 'white', fontFamily: 'Markazi Text', textAlign: 'center' }}>Current Bookings Queue</h2>
                    <table className="bookings-queue-table"style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', marginTop: '10px', color: 'white'}}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid white' }}>
                                <th style={{ padding: '8px' }}>Date</th>
                                <th style={{ padding: '8px' }}>Time</th>
                                <th style={{ padding: '8px' }}>Guests</th>
                                <th style={{ padding: '8px' }}>Occasion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingData.map((booking, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid white' }}>
                                    <td style={{ padding: '8px' }}>{booking.date}</td>
                                    <td style={{ padding: '8px' }}>{booking.time}</td>
                                    <td style={{ padding: '8px' }}>{booking.guests}</td>
                                    <td style={{ padding: '8px' }}>{booking.occasion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </section>
            )}
            
            </div>
            
    );
}

export default BookingForm;