export interface ApplyButtonProps {
  disabled: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  name: string;
  label: string;
  placeholder: string;
}

export interface CheckboxProps {
  name: string;
  label: string;
}

export interface GeneralSettingsSchema {
  name: string;
  email: string;
}
