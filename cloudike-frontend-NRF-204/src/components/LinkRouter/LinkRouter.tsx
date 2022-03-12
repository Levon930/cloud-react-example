import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import { LinkProps } from './LinkRouter.types';

/**
 * rename to Link, add necessary styles
 */
const LinkRouter: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <Link component={RouterLink} to={to}>
      {children}
    </Link>
  );
};

export default LinkRouter;
