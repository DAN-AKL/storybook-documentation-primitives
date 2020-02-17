# documentation-primitives

[![NPM](https://img.shields.io/npm/v/@dan-nz/documentation-primitives?style=flat-square)](https://www.npmjs.com/package/documentation-primitives)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Installation

```bash
npm i @dan-nz/documentation-primitives
```

## Usage in Storybook documentation-only page (MDX)

```md
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
import { Swatch, SwatchContainer } from '@dan-nz/documentation-primitives';

<Meta title="Color" />

# Color

<SwatchContainer title="Orange">
  <Swatch name="Orange 500" value="#ff9800" />
  <Swatch name="Orange 600" value="#fb8c00" />
  <Swatch name="Orange 700" value="#f57c00" />
  <Swatch name="Orange 800" value="#ef6c00" />
  <Swatch name="Orange 900" value="#e65100" />
</SwatchContainer>
```

## [Demo](http://documentation-primitives-storybook.s3-website-ap-southeast-2.amazonaws.com/)

### Running demos locally

```bash
npm run storybook:start
```

## Components

### Color Swatches

🔜
