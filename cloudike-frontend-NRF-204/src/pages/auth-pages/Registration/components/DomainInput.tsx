import React from 'react';
import { useField } from 'formik';

import { DomainInputProps } from './DomainInput.types';

import { Styled } from './DomainInput.styled';

const DomainInput: React.FC<DomainInputProps> = ({ label, domain, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Styled.Container>
      <span>{label}</span>
      <Styled.DomainContainer>
        <Styled.Input
          {...props}
          {...field}
          helperText={meta.touched && meta.error}
          error={!!(meta.touched && meta.error)}
        />
        <p>{domain}</p>
      </Styled.DomainContainer>
    </Styled.Container>
  );
};

export default DomainInput;
