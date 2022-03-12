import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { WithLoadingProps } from './WithLoading.types';

const WithLoading: React.FC<WithLoadingProps> = ({ loading, children }) =>
  loading ? <CircularProgress disableShrink /> : <div>{children}</div>;

export default WithLoading;
