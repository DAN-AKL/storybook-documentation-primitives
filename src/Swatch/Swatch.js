import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { P } from '@storybook/components/html';
import { withReset } from '@storybook/components/dist/typography/shared';
import CopyToClipboard from 'react-copy-to-clipboard';

const Container = styled.div`
  & + & {
    margin-top: 32px;
  }
`;

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

const Item = styled.div`
  padding: 0 8px;
  margin: 0 0 16px;
`;

const Color = styled.div(withReset, ({ value }) => ({
  width: 128,
  height: 128,
  marginBottom: 4,
  borderRadius: 4,
  border: '1px solid #0000001a',
  backgroundColor: value,
}));

const Name = styled.p(withReset, ({ theme }) => ({
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,
  lineHeight: '24px',
  color: theme.color.defaultText,
}));

const ButtonReset = styled.button(withReset, ({ theme }) => ({
  WebkitAppearance: 'none',
  userSelect: 'none',
  margin: 0,
  padding: 0,
  border: 0,
  outline: 0,
  cursor: 'pointer',
  fontSize: theme.typography.size.s2,
}));

export const SwatchContainer = ({ children }) => {
  return (
    <Container>
      <ContainerItems>{children}</ContainerItems>
    </Container>
  );
};

export const Swatch = ({ name, value }) => {
  return (
    <Item>
      <Color value={value} />
      <Name>{name}</Name>

      <CopyToClipboard text={value}>
        <ButtonReset type="button" title="Copy value">
          {value}
        </ButtonReset>
      </CopyToClipboard>
    </Item>
  );
};

SwatchContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

SwatchContainer.defaultProps = {};

Swatch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
