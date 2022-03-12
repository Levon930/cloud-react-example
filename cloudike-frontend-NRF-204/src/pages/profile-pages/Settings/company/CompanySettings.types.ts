export interface SettingsTab {
  label: Readonly<string>;
  path: Readonly<string>;
}

export interface CompanySettingsKindsProps {
  value: number;
}

export enum SettingsValue {
  basicSetting = 0,
  securitySetting = 1,
  customSetting = 2,
}
