export interface ApplyButtonProps {
  disabled: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
}
