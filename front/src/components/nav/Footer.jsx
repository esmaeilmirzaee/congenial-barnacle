import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p
        className='ui center aligned container'
        style={{ color: '#333', fontSize: '1.1rem' }}
      >
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
