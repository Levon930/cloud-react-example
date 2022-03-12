type SettingsTab = Readonly<{
  label?: string;
  path: string;
}>;

export interface SettingsTabsProps {
  tabs: Readonly<SettingsTab[]>;
  value: Readonly<number>;
  setValue: (value: number) => void;
  groupId?: number;
}
