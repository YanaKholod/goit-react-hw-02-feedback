import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleSection';

const Section = ({ title, children }) => {
  return (
    <section>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
