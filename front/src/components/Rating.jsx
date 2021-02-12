import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// TODO: text is the number of reviews; choose a better name
const Rating = ({ value, text, colour }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <Icon color={colour} name='star' />
        ) : value >= 0.5 ? (
          <Icon color={colour} name='star half full' />
        ) : (
          <Icon color={colour} name='star outline' />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <Icon color={colour} name='star' />
        ) : value >= 1.5 ? (
          <Icon color={colour} name='star half full' />
        ) : (
          <Icon color={colour} name='star outline' />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <Icon color={colour} name='star' />
        ) : value >= 2.5 ? (
          <Icon color={colour} name='star half full' />
        ) : (
          <Icon color={colour} name='star outline' />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <Icon color={colour} name='star' />
        ) : value >= 3.5 ? (
          <Icon color={colour} name='star half full' />
        ) : (
          <Icon color={colour} name='star outline' />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <Icon color={colour} name='star' />
        ) : value >= 4.5 ? (
          <Icon color={colour} name='star half full' />
        ) : (
          <Icon color={colour} name='star outline' />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

// #f8e825
Rating.defaultProps = {
  colour: 'yellow',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.number.isRequired,
  colour: PropTypes.string,
};

export default Rating;
