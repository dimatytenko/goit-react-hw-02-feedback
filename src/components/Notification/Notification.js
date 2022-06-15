import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
