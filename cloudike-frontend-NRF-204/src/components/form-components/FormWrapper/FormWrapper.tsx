import React from 'react';

import { Styled } from './FormWrapper.styled';

/**
 * @deprecated remove component and FormGroup from material-ui, add global styles to overrides if need
 */
const FormWrapper: React.FC = ({ children }) => <Styled.Container>{children}</Styled.Container>;

export default FormWrapper;
