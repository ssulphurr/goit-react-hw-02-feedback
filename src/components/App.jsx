import React, { Component } from 'react';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = label => {
    this.setState(prevState => {
      console.log(prevState[label]);

      return { [label]: prevState[label] + 1 };
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={() => this.addFeedback('good')}>
          Good
        </button>
        <button type="button" onClick={() => this.addFeedback('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => this.addFeedback('bad')}>
          Bad
        </button>

        <h1>Statistics</h1>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </>
    );
  }
}

export default App;
