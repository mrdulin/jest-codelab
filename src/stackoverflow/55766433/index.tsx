import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return <div className="container"></div>;
};

Button.propTypes = {
  action: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Button;
