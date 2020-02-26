import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { components } from '@storybook/components/html';

const widthWithUnit = (value = 10, unit) => `${value}${unit}`;

const Table = styled(components.table)`
  width: 100%;
`;

const Cell = styled.td`
  width: 150px;
`;

const StyledTile = styled.div`
  width: ${({ value, unit }) => widthWithUnit(value, unit)};
  height: ${({ square, value, unit }) =>
    square ? widthWithUnit(value, unit) : '10px'};
  background-color: ${props => props.color};
`;

export const Tile = props => <StyledTile {...props} />;

export const Row = ({ children, value, unit, tileProps }) => (
  <tr>
    <Cell>{children}</Cell>
    <Cell>
      {value}
      {unit}
    </Cell>
    <td>
      <StyledTile {...tileProps} value={value} unit={unit} />
    </td>
  </tr>
);

export const SpacingScale = ({ columns, children, unit, tileProps }) => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map(c => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            unit,
            tileProps,
          }),
        )}
      </tbody>
    </Table>
  );
};

const tilePropsPropTypes = {
  color: PropTypes.string,
  square: PropTypes.bool,
  unit: PropTypes.oneOf(['px', 'rem']),
};

const tilePropsDefaultProps = {
  color: '#000',
  square: false,
  unit: 'px',
};

Tile.propTypes = {
  ...tilePropsPropTypes,
};

Tile.defaultProps = {
  ...tilePropsDefaultProps,
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  tileProps: PropTypes.shape(tilePropsPropTypes),
  unit: PropTypes.oneOf(['px', 'rem']),
  value: PropTypes.number.isRequired,
};

Row.defaultProps = {
  tileProps: tilePropsDefaultProps,
  unit: 'px',
};

SpacingScale.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string),
  tileProps: PropTypes.shape(tilePropsPropTypes),
  unit: PropTypes.oneOf(['px', 'rem']),
};

SpacingScale.defaultProps = {
  columns: ['Name', 'Value', 'Example'],
  tileProps: tilePropsDefaultProps,
  unit: 'px',
};
