import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleFeedback';

const Feedback = ({ onLeavefeedback, options }) => {
  return (
    <Styled.Wrapper>
      {options.map((name, i) => {
        return (
          <Styled.Button
            color="bad"
            key={i + 1}
            onClick={() => {
              onLeavefeedback(name);
            }}
          >
            {name}
          </Styled.Button>
        );
      })}
    </Styled.Wrapper>
  );
};

Feedback.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
export default Feedback;
