import React from 'react';

const Home = () => (
  <div
    style={{
      padding: '24px calc(6px + 5vw)',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: '960px',
      }}
    >
      <h2>Welcome to our page!</h2>
      <p>
        This is a simple React-built website that let you perform simple math operations through
        our calculator app.
      </p>
      <p>
        Also, there is a math quote in our quote section so you can get inspired.
      </p>
    </div>
  </div>
);

export default Home;
