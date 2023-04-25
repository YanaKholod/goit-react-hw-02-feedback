import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleStatistics';

const Statistics = ({ options, statistic, total, positivePercentage }) => {
  return (
    <>
      {options.map((name, i) => {
        return (
          <Styled.Numbers key={i}>
            {name}:<Styled.Numbers>{statistic[name]}</Styled.Numbers>
          </Styled.Numbers>
        );
      })}
      <p>
        Total: <Styled.Numbers>{total}</Styled.Numbers>
      </p>
      <Styled.P>
        Positive feedback:
        <Styled.Numbers>{positivePercentage()}</Styled.Numbers>%
      </Styled.P>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
