import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';

const Container = styled.div`
  & + & {
    margin-top: 1.25rem;
  }
`;

const ContainerTitle = styled.h3`
  margin: 0 0 0.5rem;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  position: relative;
  margin: 0 0.5rem 0.5rem 0;
`;

const Color = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 0 0.5rem;
  border-radius: 4px;
  border-color: #0000001a;
  background-color: ${props => props.value};
`;

const Name = styled.p`
  font-weight: 700;
  margin: 0 0 0.25rem;
`;

const ButtonReset = styled.button`
  -webkit-appearance: none;
  user-select: none;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
`;

export const SwatchContainer = ({ title, children }) => {
  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
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
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

SwatchContainer.defaultProps = {
  title: '',
};

Swatch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
