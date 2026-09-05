import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
            <h1>🚧 Coming Soon!</h1>
            <p>We are working hard to bring you this feature. Stay tuned!</p>
            <Link to="/" style={{ color: '#495E57', fontWeight: 'bold' }}>
                Back to Home
            </Link>
        </div>
    );
}

export default ComingSoon;