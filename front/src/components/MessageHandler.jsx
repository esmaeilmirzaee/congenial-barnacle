import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageHandler = ({ message, colour }) => {
  return (
    <Message negative>
      <Message.Header>We're sorry. There is something wrong.</Message.Header>
      <p>{message}</p>
    </Message>
  );
};

export default MessageHandler;
