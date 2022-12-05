import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleClickBtn = evt => {
    const { name } = evt.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return bad + neutral + good;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() > 0
      ? `${Math.round((this.state.good / this.countTotalFeedback()) * 100)} %`
      : 0;
  }

  render() {
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          {options.map(option => (
            <FeedbackOptions
              key={option}
              options={option}
              onLeaveFeedback={this.hendleClickBtn}
            />
          ))}
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
