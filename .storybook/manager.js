import { addons } from '@storybook/addons';
addons.setConfig({
  previewTabs: {
    canvas: {
      hidden: true,
    },
    'storybook/docs/panel': 'MDX',
  },
});
