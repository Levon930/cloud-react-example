import React from 'react';

import { DeleteAccountModalInputProps } from './DeleteAccountModal.types';
import { useGetInputProps } from './useGetInputProps.utils';

import { Styled } from './DeleteAccountModal.styled';

const DeleteAccountModalInput: React.FC<DeleteAccountModalInputProps> = ({ values }) => {
  const inputProps = useGetInputProps(values.deleteReason);

  if (!inputProps) return null;

  return <Styled.Input {...inputProps} />;
};

export default DeleteAccountModalInput;
