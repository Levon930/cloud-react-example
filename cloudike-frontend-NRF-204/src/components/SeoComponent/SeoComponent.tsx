import React from 'react';
import { Helmet } from 'react-helmet';

import { SeoComponentProps } from './SeoComponent.types';

const SeoComponent: React.FC<SeoComponentProps> = ({
  title = 'Cloudike',
  description = 'Cloudike',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SeoComponent;
