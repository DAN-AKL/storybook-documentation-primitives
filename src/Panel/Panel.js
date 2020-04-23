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

const InfoPanel = styled(StyledPanel)`
  background-color: #e8f4fd;
  border-color: #2196f3;
`;

const WarningPanel = styled(StyledPanel)`
  background-color: #fffae6;
  border-color: #fbc02d;
`;

export const Info = (props) => <InfoPanel {...props} />;
export const Warning = (props) => <WarningPanel {...props} />;

const panelPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  prefix: PropTypes.string,
};

const panelDefaultProps = {
  prefix: 'Note',
};

Panel.propTypes = {
  ...panelPropTypes,
};

Info.propTypes = {
  ...panelPropTypes,
};

Warning.propTypes = {
  ...panelPropTypes,
};

Panel.defaultProps = {
  ...panelDefaultProps,
};

Info.defaultProps = {
  ...panelDefaultProps,
};

Warning.defaultProps = {
  ...panelDefaultProps,
};
