import React from 'react';

export interface MenuItem {
  name: string;
  Icon: React.FC;
  onClick?: () => void;
  disabled?: boolean;
  dialog?: (files: any) => void;
}

export interface SidebarProps {
  menuItemsArray: MenuItem[];
}
