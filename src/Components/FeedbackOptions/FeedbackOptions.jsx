import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <>
      {options.map((option, index) => (
        <button key={index} type="button" name={option} onClick={handleClick}>
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
