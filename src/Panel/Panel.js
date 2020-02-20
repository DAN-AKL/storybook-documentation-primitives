import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { components } from '@storybook/components/html';

const Div = components.div;
const P = components.p;

const Panel = ({ className, children, prefix }) => (
  <Div className={className}>
    <P>
      <strong>{prefix}:</strong> {children}
    </P>
  </Div>
);

const StyledPanel = styled(Panel)`
  padding: 0 24px;
  border: 1px solid #0000;
  border-left-width: 5px;
`;

export const Info = styled(StyledPanel)`
  background-color: #e8f4fd;
  border-color: #2196f3;
`;

export const Warning = styled(StyledPanel)`
  background-color: #fffae6;
  border-color: #fbc02d;
`;

Panel.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  prefix: PropTypes.string,
};

Panel.defaultProps = {
  prefix: 'Note',
};
