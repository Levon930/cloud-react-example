import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab as MuiTab } from '@material-ui/core';

import { TAB } from '@components/Tabs';
import { useQueryParams } from '@hooks';
import TabProps from './Tab.types';

const Tab: React.FC<TabProps> = (props) => {
  const history = useHistory();
  const queryParams = useQueryParams();

  const handleClick = (e: React.MouseEvent) => {
    queryParams.set(TAB, props.value);
    history.push({ search: queryParams.toString() });

    props?.onClick?.(e);
  };

  return <MuiTab {...props} onClick={handleClick} />;
};

export default Tab;
