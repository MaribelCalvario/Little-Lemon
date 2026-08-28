// src/ConfirmedBooking.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
    const navigate = useNavigate();

    return (
        <main style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
            <h1 style={{ fontSize: '32px', color: '#495E57' }}>Booking Confirmed!</h1>
            <p style={{ fontSize: '18px', margin: '20px 0', color: '#333333' }}>
                Thank you for reserving a table at Little Lemon. Your reservation has been successfully received, and a confirmation email has been sent to your inbox.
            </p>
            <button 
                onClick={() => navigate('/')}
                style={{
                    backgroundColor: '#F4CE14',
                    color: '#333333',
                    border: 'none',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
            >
                Return to Home
            </button>
        </main>
    );
}

export default ConfirmedBooking;