import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { Div, P, H4 } from '@storybook/components/html';

const Container = styled.div`
  display: flex;
  margin: 0 -16px;

  & + & {
    margin-top: 32px;
  }
`;

const UsageItem = styled(Div)`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  margin: 0 16px;
  padding: 24px 32px 16px;
  background-color: #fafafa;
  border-top-style: solid;
  border-top-width: 5px;
`;

const CorrectItem = styled(UsageItem)`
  border-top-color: green;
`;

const IncorrectItem = styled(UsageItem)`
  border-top-color: red;
`;

const CorrectTitle = styled(H4)`
  color: green;
`;

const IncorrectTitle = styled(H4)`
  color: red;
`;

export const Correct = ({ title, children }) => {
  return (
    <CorrectItem>
      <CorrectTitle>{title}</CorrectTitle>
      <P>{children}</P>
    </CorrectItem>
  );
};

export const Incorrect = ({ title, children }) => {
  return (
    <IncorrectItem>
      <IncorrectTitle>{title}</IncorrectTitle>
      <P>{children}</P>
    </IncorrectItem>
  );
};

export const Usage = ({ children }) => {
  return <Container>{children}</Container>;
};

Usage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

Correct.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  title: PropTypes.string,
};

Incorrect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  title: PropTypes.string,
};

Correct.defaultProps = {
  title: 'Do',
};

Incorrect.defaultProps = {
  title: "Don't",
};
