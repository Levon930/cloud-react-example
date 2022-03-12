import { Select as MuiSelect, SelectProps as MuiSelectProps } from '@material-ui/core';

import styled from '@emotion/styled';

const SelectWithProps = (props: MuiSelectProps) => <MuiSelect variant="outlined" {...props} />;

const Select = styled(SelectWithProps)`
  margin-bottom: 1.5rem;
  height: 45px;
  padding: 14px 0;
  > div {
    padding: 14px;
  }
`;

export const Styled = {
  Select,
};
