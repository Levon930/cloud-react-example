import React from 'react';
import { Tabs as MuiTabs } from '@material-ui/core';

import TabsProps from './Tabs.types';

const Tabs: React.FC<TabsProps> = (props) => {
  return <MuiTabs {...props} />;
};

export default Tabs;
