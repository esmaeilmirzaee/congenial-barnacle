import React from 'react';
import PropTypes from 'prop-types';
import { Form, Image, Button, Checkbox, Header } from 'semantic-ui-react';

const RegisterScreen = () => {
  return (
    <>
      <Image
        source={'../assets/maple.svg'}
        style={{ width: '10rem', height: '10rem' }}
      />
      <Header>Register Screen</Header>
    </>
  );
};

export default RegisterScreen;

RegisterScreen.defaultTypes = {};
RegisterScreen.propTypes = {};
