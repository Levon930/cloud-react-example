import {
  Box,
  Button as MuiButton,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  Tabs,
  Typography,
} from '@material-ui/core';

import styled from '@emotion/styled';

const ModalWrapper = styled(Box)`
  ${({ theme }) => `
  width: 37.5rem;
  min-height: 28.8rem;
  padding-top: 1.3rem;
  font-size: 0.9rem;
  color:${theme.palette.grey[100]};
  `}
`;

const TabsRow = styled(Tabs)`
  ${({ theme }) => `
  margin-bottom: 1.56rem;
  & span {
    color: ${theme.palette.grey[100]};
    font-size: 1rem;
    text-transform: none;
  }
  & .MuiTabs-flexContainer {
    justify-content: space-between;
  }
  & .MuiTabs-indicator {
    background-color:black;
  }
`}
`;

const Title = styled(Typography)`
  font-size: 1.1rem;
  margin-bottom: 0.9rem;
`;

const InviteButton = styled(MuiButton)`
  ${({ theme }) => `
  text-transform: none;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${theme.palette.grey[900]};
`}
`;

const FormRow = styled(Box)`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Row = styled(Box)`
  display: flex;
  align-items: center;
  & svg {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.6rem;
  }
`;

const OwnerRow = styled(Row)`
  ${({ theme }) => `
  padding-bottom: 0.8rem;
  & svg path {
    fill:${theme.palette.yellow[100]}
  }
`}
`;

const NotifRow = styled(Row)`
  ${({ theme }) => `
  margin-bottom: 1.1rem;
  & svg path {
    fill:${theme.palette.grey[100]}!important;
  }
`}
`;

const ShareSettingsContent = styled(Box)`
  margin-left: 1.6rem;
`;

const OwnerSettingsRow = styled(Row)`
  ${({ theme }) => `
  justify-content: space-between;
  padding-top: 0.8rem;
  border-top: 1px solid ${theme.palette.grey[900]};
  & svg path {
    fill:${theme.palette.grey[100]}!important;
  }
  & button {
    color:${theme.palette.yellow[100]};
    text-transform: none;
  }
  & p {
    font-size: 0.9rem;
  }
  & .MuiInputBase-root {
    font-size: 0.9rem;
  }
`}
`;

const ButtonsRow = styled(Row)`
  justify-content: space-between;
  margin-top: 2.1rem;
`;

const StopButton = styled(MuiButton)`
  ${({ theme }) => `
  background-color:${theme.palette.yellow[100]}; 
`}
`;

const CloseButton = styled(MuiButton)`
  ${({ theme }) => `
  border: 1px solid ${theme.palette.grey[500]}; 
`}
`;

const LinkRow = styled(Row)`
  ${({ theme }) => `
  justify-content: space-between;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${theme.palette.grey[500]};
  margin-bottom: 1.8rem;
  & .MuiSvgIcon-root {
    width: 1.6rem;
    height: 1.6rem;
    fill:${theme.palette.yellow[100]};
  }
`}
`;

const DownloadButtonsRow = styled(Row)`
  margin-left: 0.8rem;
  margin-bottom: 1.6rem;
  & .MuiFormGroup-root {
    flex-direction: row;
  }
  & span {
    font-size: 0.9rem;
  }
`;

const Detailes = styled(Typography)`
  font-size: 0.9rem;
  margin-bottom: 0.9rem;
`;

const RadioButton = styled(FormControlLabel)`
  ${({ theme }) => `
  border-bottom: none;
  & svg {
    fill: ${theme.palette.yellow[100]};
  }
`}
`;

const CheckBoxWrapper = styled(Box)`
  & svg {
    width: 0.9rem;
    height: 0.9rem;
  }
  & span {
    font-size: 0.9rem;
  }
`;

const DateContent = styled(Box)`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  & .MuiInputBase-root  {
    border: 1px solid ${theme.palette.grey[500]};
    font-size: 0.9rem;
  }
  & .MuiInputBase-input  {
    padding: 0.3rem 0.3rem;
  }
  & .MuiFormControl-root  {
    margin: 0 0;
    margin-left: 0.4rem;
  }
`}
`;

const PasswordRow = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
  & .MuiInputBase-formControl {
    margin: 0 0;
  }
  & .MuiBox-root {
    margin-bottom: 0;
  }
  & .MuiInputBase-input {
    width: 50%;
  }
`;

const ApplyButtonRow = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8rem;
  & button {
    width: 6.2rem;
    margin-left: 0.4rem;
  }
`;

const CompanyFolderInfo = styled(NotifRow)`
  padding: 3.6rem 2rem;
  align-items: flex-start;
`;

const InputContainer = styled(Box)`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 70%;
  border: 1px solid ${theme.palette.grey[500]};
  & .MuiInput-underline::before {
    border-bottom: none;
  }
  & .MuiInput-underline:hover:before {
    border-bottom: none;
  }
  & .MuiInput-underline::after {
    border-bottom: none;
  }
`}
`;

const MembersRow = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const MemberBox = styled(Box)`
  ${({ theme }) => `
  margin-right: 1.3rem;
  display: flex;
  align-items: center;
  & button {
    border: none;
    background-color:transparent;
  }
  border: 1px solid ${theme.palette.grey[500]};
  border-radius: 22.5px;
  padding: 0.1rem 0.6rem;
`}
`;

const SelectWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Unshare = styled(MuiButton)`
  margin-left: 3rem;
`;

const RadioGroup = styled(MuiRadioGroup)`
  flex-direction: row;
`;

export const Styled = {
  ModalWrapper,
  TabsRow,
  Title,
  InviteButton,
  FormRow,
  NotifRow,
  Row,
  ShareSettingsContent,
  OwnerSettingsRow,
  OwnerRow,
  ButtonsRow,
  StopButton,
  CloseButton,
  LinkRow,
  Detailes,
  DownloadButtonsRow,
  RadioButton,
  CheckBoxWrapper,
  DateContent,
  PasswordRow,
  ApplyButtonRow,
  CompanyFolderInfo,
  InputContainer,
  MembersRow,
  MemberBox,
  SelectWrapper,
  Unshare,
  RadioGroup,
};
