import React from 'react';
import PropTypes, { func, object } from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnContainer}>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func.isRequired,
};
