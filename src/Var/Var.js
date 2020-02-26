import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { components } from '@storybook/components/html';
import CopyToClipboard from 'react-copy-to-clipboard';

const Code = styled(components.code)`
  cursor: ${({ noCopy }) => (noCopy ? 'auto' : 'pointer')};
`;

const Var = ({ children, noCopy, onCopyText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (_text, result) => {
    if (!result) {
      return;
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return noCopy ? (
    <Code noCopy={noCopy}>{children}</Code>
  ) : (
    <CopyToClipboard text={children} onCopy={handleCopy}>
      <Code noCopy={noCopy} title="Copy value">
        {copied ? onCopyText : children}
      </Code>
    </CopyToClipboard>
  );
};

Var.propTypes = {
  children: PropTypes.string.isRequired,
  noCopy: PropTypes.bool,
  onCopyText: PropTypes.string,
};

Var.defaultProps = {
  noCopy: false,
  onCopyText: 'Copied!',
};

export default Var;
