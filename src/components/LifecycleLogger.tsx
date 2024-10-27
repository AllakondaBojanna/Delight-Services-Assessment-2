import React from 'react';

interface LifecycleLoggerState {
  count: number;
}

class LifecycleLogger extends React.Component<{}, LifecycleLoggerState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleLogger;
