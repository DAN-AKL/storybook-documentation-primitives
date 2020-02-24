import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { components } from '@storybook/components/html';
import { DocsContext } from '@storybook/addon-docs/dist/blocks/DocsContext';

const P = components.p;

const Link = styled(components.a)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 0.4em;
`;

const EditLink = ({ path, text, icon }) => {
  const {
    parameters: { repository },
  } = useContext(DocsContext);

  if (!repository) {
    return (
      <P>Can&rsquo;t render EditLink: `repository` parameter is missing.</P>
    );
  }

  if (!path) {
    return <P>Can&rsquo;t render EditLink: `path` prop is missing.</P>;
  }

  const { baseUrl, branch = 'master' } = repository;
  const href = `${baseUrl}/edit/${branch}/${path}`;

  return (
    <P>
      <Link href={href} rel="noopener noreferrer" target="_blank">
        {icon && <Icon icon="github" aria-hidden />}
        <Text>{text}</Text>
      </Link>
    </P>
  );
};

EditLink.propTypes = {
  icon: PropTypes.bool,
  text: PropTypes.string,
  path: PropTypes.string.isRequired,
};

EditLink.defaultProps = {
  icon: true,
  text: 'Edit this page on GitHub',
};

export default EditLink;
