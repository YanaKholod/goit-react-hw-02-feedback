import styled from 'styled-components';

const handleColorType = color => {
  switch (color) {
    case 'good':
      return 'rgba(0, 128, 0, 25%)';
    case 'neutral':
      return 'rgba(255, 228, 196, 60%)';
    case 'bad':
      return 'rgba(255, 0, 0, 20%)';
  }
};
export const Styled = {
  Numbers: styled.div`
    font-weight: 700;
  `,
  P: styled.p`
    text-transform: capitalize;
    margin: 0;
    width: 200px;
    padding: 16px;
    display: block;
  `,
};
