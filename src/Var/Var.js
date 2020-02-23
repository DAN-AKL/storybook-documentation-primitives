import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { components } from '@storybook/components/html';
import CopyToClipboard from 'react-copy-to-clipboard';

const Code = styled(components.code)`
  cursor: ${({ noCopy }) => (noCopy ? 'auto' : 'pointer')};
`;

const Var = ({ children, noCopy }) => {
  return noCopy ? (
    <Code noCopy={noCopy}>{children}</Code>
  ) : (
    <CopyToClipboard text={children}>
      <Code noCopy={noCopy} title="Copy value">
        {children}
      </Code>
    </CopyToClipboard>
  );
};

Var.propTypes = {
  children: PropTypes.string.isRequired,
  noCopy: PropTypes.bool,
};

Var.defaultProps = {
  noCopy: false,
};

export default Var;
