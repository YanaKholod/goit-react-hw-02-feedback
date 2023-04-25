import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleNotification';

const Notification = ({ message }) => {
  return <Styled.Message>{message}</Styled.Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
