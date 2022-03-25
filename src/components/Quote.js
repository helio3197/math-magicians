import React from 'react';

const Quote = () => (
  <>
    <h2
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        padding: '24px calc(6px + 5vw)',
      }}
    >
      <q
        style={{
          marginBottom: '16px',
          fontSize: '2rem',
        }}
      >
        Pure mathematics is, in its way, the poetry of logical ideas.
      </q>
      <i
        style={{
          alignSelf: 'end',
          color: '#8d8787',
        }}
      >
        — Albert Einstein, German theoretical physicist
      </i>
    </h2>
  </>
);

export default Quote;
