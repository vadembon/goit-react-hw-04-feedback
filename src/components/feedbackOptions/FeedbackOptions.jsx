import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Btn name={options} type="button" onClick={onLeaveFeedback}>
      {options}
    </Btn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
