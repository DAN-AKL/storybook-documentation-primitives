import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { useParameter } from '@storybook/api';
import { Icon } from '@storybook/design-system';
import { components } from '@storybook/components/html';

const P = components.p;

const Link = styled(components.a)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 0.4em;
`;

const EditLink = ({ relativePath, icon }) => {
  const results = useParameter('baz', {});
  console.log(results);
  return relativePath ? (
    <P>
      <Link href={relativePath} rel="noopener noreferrer" target="_blank">
        {icon && <Icon icon="github" aria-hidden />}
        <Text>Edit this page on GitHub</Text>
      </Link>
    </P>
  ) : null;
};

EditLink.propTypes = {
  icon: PropTypes.bool,
  relativePath: PropTypes.string.isRequired,
};

EditLink.defaultProps = {
  icon: true,
};

export default EditLink;
