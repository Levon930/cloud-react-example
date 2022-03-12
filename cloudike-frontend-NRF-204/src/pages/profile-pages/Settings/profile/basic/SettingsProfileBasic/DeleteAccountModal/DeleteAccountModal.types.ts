export interface InputProps {
  name: string;
  label: string;
  placeholder: string;
}

export interface ButtonProps {
  disabled: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export interface FormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export interface DeleteReasonType {
  deleteReason: string;
}

export interface DeleteAccountModalInputProps {
  values: DeleteReasonType;
}

export enum DeleteReason {
  service = '4',
  uncomfortable = '5',
  others = '6',
}
