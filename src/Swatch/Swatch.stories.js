import React from 'react';
import { Swatch, SwatchContainer } from './Swatch';

export default {
  title: 'Color',
  component: Swatch,
};

export const swatch = () => (
  <SwatchContainer>
    <Swatch name="Orange" value="#e65100" />
  </SwatchContainer>
);

export const multipleSwatches = () => (
  <SwatchContainer>
    <Swatch name="Orange 500" value="#ff9800" />
    <Swatch name="Orange 600" value="#fb8c00" />
    <Swatch name="Orange 700" value="#f57c00" />
    <Swatch name="Orange 800" value="#ef6c00" />
    <Swatch name="Orange 900" value="#e65100" />
  </SwatchContainer>
);

export const optionalTitle = () => (
  <SwatchContainer title="Orange">
    <Swatch name="Orange 500" value="#ff9800" />
    <Swatch name="Orange 600" value="#fb8c00" />
    <Swatch name="Orange 700" value="#f57c00" />
    <Swatch name="Orange 800" value="#ef6c00" />
    <Swatch name="Orange 900" value="#e65100" />
  </SwatchContainer>
);

export const multipleLists = () => (
  <>
    <SwatchContainer title="Orange">
      <Swatch name="Orange 500" value="#ff9800" />
      <Swatch name="Orange 600" value="#fb8c00" />
      <Swatch name="Orange 700" value="#f57c00" />
      <Swatch name="Orange 800" value="#ef6c00" />
      <Swatch name="Orange 900" value="#e65100" />
    </SwatchContainer>

    <SwatchContainer title="Blue">
      <Swatch name="Blue 500" value="#2196f3" />
      <Swatch name="Blue 600" value="#1e88e5" />
      <Swatch name="Blue 700" value="#1976d2" />
      <Swatch name="Blue 800" value="#1565c0" />
      <Swatch name="Blue 900" value="#0d47a1" />
    </SwatchContainer>
  </>
);
