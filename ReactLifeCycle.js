/* React LifeCycle */
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`componentDidUpdate: Count updated to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed from the DOM');
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log('render: Rendering the component');
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement} style={{ marginRight: '10px' }}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default LifecycleDemo;
/*App.js*/
/*import React, { useState } from 'react';
import LifecycleDemo from './reactlifecycle'; 

function App() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>React App</h1>
      <button 
        onClick={toggleComponent} 
        style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px', cursor: 'pointer' }}
      >
        {showComponent ? 'Hide' : 'Show'} Lifecycle Component
      </button>
      <hr />
      {showComponent && <LifecycleDemo />}
    </div>
  );
}

export default App;
 */

