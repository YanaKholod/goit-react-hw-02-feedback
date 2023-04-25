import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleStatistics';

const Statistics = ({ options, statistic, total, positivePercentage }) => {
  return (
    <>
      {options.map((name, i) => {
        return (
          <Styled.Numbers key={i}>
            {name}:<Styled.P>{statistic[name]}</Styled.P>
          </Styled.Numbers>
        );
      })}
      <Styled.Numbers>
        Total: <Styled.P>{total}</Styled.P>
      </Styled.Numbers>
      <Styled.Numbers>
        Positive feedback:
        <Styled.P>{positivePercentage()}</Styled.P>%
      </Styled.Numbers>
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
