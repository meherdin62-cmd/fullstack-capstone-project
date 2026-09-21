import React from 'react';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>GiftFinder</h1>
      <p>Discover the perfect gift for every occasion, all in one place.</p>
      <button onClick={() => window.location.href = '/register'}>
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;