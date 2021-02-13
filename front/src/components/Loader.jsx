import React from 'react';
import { Placeholder } from 'semantic-ui-react';

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    return this.props.children;
  }
}

const Loader = ({ message }) => {
  return (
    <Placeholder>
      <Placeholder.Header>
        <Placeholder.Line length='very short' />
        <Placeholder.Line length='medium' />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line length='short' />
      </Placeholder.Paragraph>
    </Placeholder>
  );
};

export default Loader;
