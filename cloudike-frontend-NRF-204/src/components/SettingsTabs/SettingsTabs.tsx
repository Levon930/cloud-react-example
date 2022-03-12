import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Tab } from '@material-ui/core';

import { Tabs } from '@components';
import { SettingsTabsProps } from './SettingsTabs.types';

import { Styled } from './SettingsTabs.styled';

/**
 * TODO: delete component, replace with Tabs component, use Tab from component in Tabs folder
 */
const SettingsTabs: React.FC<SettingsTabsProps> = ({ tabs, setValue, value, groupId }) => {
  const { location, push } = useHistory();

  useEffect(() => {
    const index = tabs.findIndex(({ path }) => `/${path}` === location.pathname);
    index !== -1 && setValue(index);
  }, [location.pathname, setValue, tabs]);

  const allProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleClick = (newValue: number, path: string) => {
    setValue(newValue);
    push(`/${path}?groupId=${groupId}`);
  };

  return (
    <Styled.TabsContainer>
      <Tabs value={value} aria-label="simple tabs">
        {tabs.map(({ path, label }, index) => (
          <Tab
            key={path}
            label={label}
            {...allProps(index)}
            onClick={() => handleClick(index, path)}
          />
        ))}
      </Tabs>
    </Styled.TabsContainer>
  );
};

export default SettingsTabs;
