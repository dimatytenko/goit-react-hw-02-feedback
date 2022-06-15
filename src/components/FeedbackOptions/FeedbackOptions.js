import PropTypes from 'prop-types';
// import style from './Feeedback.module.scss';

import { FeedbackBox, FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBox>
      {options.map(option => {
        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </FeedbackBox>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
