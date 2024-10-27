import React from 'react';

function withLogging<T>(WrappedComponent: React.ComponentType<T>) {
  return class extends React.Component<T> {
    componentDidMount() {
      console.log('Wrapped Component Mounted');
    }

    componentDidUpdate() {
      console.log('Wrapped Component Updated');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLogging;
