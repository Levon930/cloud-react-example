import React from 'react';
import { PaginationProps } from '@material-ui/lab';

import { Styled } from './Pagination.styled';

/**
 * move to simpleTable
 * add styles to overrides theme
 * remove component
 */
const Pagination: React.FC<PaginationProps> = (props) => {
  return <Styled.Pagination {...props} />;
};

export default Pagination;
