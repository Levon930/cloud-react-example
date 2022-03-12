export interface InputProps {
  name: string;
  placeholder: string;
  ref?: any;
}

export interface CopyButtonProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: any;
}
