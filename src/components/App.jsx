import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = label => {
    this.setState(prevState => {
      return { [label]: prevState[label] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce((acc, value) => {
      acc = acc + value;
      return acc;
    }, 0);

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = (this.state.good / totalFeedback) * 100;

    return parseInt(positivePercentage);
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

          <li>Total: {this.countTotalFeedback()}</li>

          <li>Positiv feedback: {this.countPositiveFeedbackPercentage()} %</li>
        </ul>
      </>
    );
  }
}

export default App;
