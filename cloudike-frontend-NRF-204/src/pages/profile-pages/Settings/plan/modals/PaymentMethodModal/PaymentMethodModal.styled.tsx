import { Box, Button, Divider as DividerMUI, Typography } from '@material-ui/core';

import styled from '@emotion/styled';

const FlexBox = styled(Box)`
  display: flex;
`;

const FlexColumnBox = styled(FlexBox)`
  flex-direction: column;
`;

const LeftSide = styled(FlexColumnBox)`
  ${({ theme }) => `
    flex-direction: column;
    display: flex;
    margin-right: 2%;
    width: 56%;
    
    div input {
      border: 1px solid ${theme.palette.grey[300]};
      height: 45px;
      box-sizing: border-box;
    }
  `}
`;

const RightSide = styled(FlexColumnBox)`
  ${({ theme }) => `
    width: 44%;
    flex-direction: column;
    border: 1px solid ${theme.palette.yellow[200]};
    border-radius: 10px;
    padding: 2%;
    margin: 2%;
    height: fit-content;
    box-shadow: 2px 3px 6px 4px ${theme.palette.grey[500]};
    padding-bottom: 4%;

    button {
      padding: 4%;
    }
  `}
`;

const Divider = styled(DividerMUI)`
  margin-top: 4%;
  margin-bottom: 1%;
`;

const DividerYellow = styled(Divider)`
  ${({ theme }) => `
    background-color: ${theme.palette.yellow[300]};
    margin-bottom: 4%;
  `}
`;

const Title = styled.h2`
  ${({ theme }) => `
    font-size: 1rem;
    color: ${theme.palette.grey[900]};
    font-weight: 500;
    margin-top: 0;
  `}
`;

const LeftSideTitle = styled(Title)`
  ${({ theme }) => `
    color: ${theme.palette.grey[100]};
    margin-bottom: 0;
    &:nth-of-type(1) {
      margin-top: 6%;
    }

    &:nth-of-type(2) {
      margin-top: 0;
    }

    &:nth-of-type(3) {
      margin-top: 7%;
    }
  `}
`;

const RowAvailability = styled(FlexBox)`
  ${({ theme }) => `
    width: calc((100% - 2%) / 2);
    align-items: baseline;
    margin-bottom: 5%;

    .e100939t6 {
      color: ${theme.palette.grey[200]};
    }
  `}
`;

const Description = styled(Box)`
  margin-top: 2%;
  margin-bottom: 4%;
  font-size: 0.75rem;
`;

const Info = styled(Box)`
  ${({ theme }) => `
    margin-bottom: 8%;
    color: ${theme.palette.grey[200]};
    font-size: 0.8rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`;

const RadioGroupContainer = styled(Box)`
  font-size: 0.5rem;
  width: 100%;
`;

const NameBox = styled(Box)`
  ${({ theme }) => `
    font-size: 0.9rem;
    margin-right: 3%;
    width: 32%;
    color: ${theme.palette.grey[100]};
  `}
`;

const InputContainer = styled(Box)`
  display: flex;
  width: 65%;
  font-size: 0.8rem;

  .MuiInputBase-root {
    font-size: 0.8rem;
    margin-bottom: 2%;
    margin-top: 0;
  }

  .MuiInputBase-input {
    padding: 10px;
    font-size: 0.7rem;
  }

  .MuiFormLabel-root {
    margin-bottom: 0;
  }

  .MuiFormControl-root {
    width: 49%;
    margin-right: 1%;
    margin-bottom: 0;
  }

  & .input-placeholder {
    font-size: 0.4rem;
  }
`;

const InputContainerSecond = styled(InputContainer)`
  .MuiInputBase-root {
    margin-right: 2%;
  }

  .MuiFormControl-root {
    width: 24%;
  }
`;

const AvailabilityIconContainer = styled(FlexBox)`
  position: relative;
  top: 2px;
  align-items: center;
  justify-content: center;
  margin-right: 6%;
`;

const FlexTable = styled(FlexBox)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 8%;
`;

const RowName = styled(Box)`
  ${({ theme }) => `
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    color: ${theme.palette.grey[200]};
  `}
`;

const SubmitButton = styled(Button)`
  ${({ theme }) => `
    margin-top: 0;
    background-color: ${theme.palette.grey[600]};
    color: ${theme.palette.grey[200]};
  `}
`;

const FlexBoxContainer = styled(FlexBox)`
  width: 700px;
`;

const SelectWrapper = styled(Box)`
  ${({ theme }) => `
    .MuiSelect-outlined {
      color: ${theme.palette.grey[200]};
      font-size: 0.9em;
    }

    .MuiInputBase-root:hover {
      fieldset {
        border: 1px solid ${theme.palette.grey[300]};
      }
    }

    .MuiOutlinedInput-root {
      margin-top: 16%;
      margin-bottom: 12%;
    }
  `}
`;

const ALink = styled.a`
  ${({ theme }) => `
    text-decoration: none;
    color: ${theme.palette.yellow[500]};
  `}
`;

const OpenModalButton = styled(Button)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    margin: 0;
    font-size: 0.8rem;
    text-transform: initial;
  `}
`;

const PlanType = styled(Typography)`
  font-size: 1.9rem;
  line-height: normal;
  letter-spacing: -1px;
`;

const InputsWrapper = styled(Box)`
  > div {
    align-items: center;
    margin-bottom: 0.5em;
  }
`;

const TermsCheckboxWrapper = styled(Box)`
  ${({ theme }) => `
    margin-top: 7%;
    margin-bottom: 7%;

    .MuiFormControlLabel-label {
      font-size: 1em;
      color: ${theme.palette.grey[900]};
    }

    .MuiIconButton-label {
      color: ${theme.palette.yellow[200]};
    }
  `}
`;

const DescriptionBold = styled.span`
  font-weight: 900;
`;

const InfoWrapper = styled(Box)``;

export const Styled = {
  FlexBox,
  FlexColumnBox,
  LeftSide,
  RightSide,
  ALink,
  Divider,
  DividerYellow,
  Title,
  Info,
  SubmitButton,
  Description,
  RadioGroupContainer,
  NameBox,
  InputContainer,
  InputContainerSecond,
  RowAvailability,
  RowName,
  FlexTable,
  FlexBoxContainer,
  AvailabilityIconContainer,
  PlanType,
  LeftSideTitle,
  InputsWrapper,
  SelectWrapper,
  TermsCheckboxWrapper,
  DescriptionBold,
  InfoWrapper,
  OpenModalButton,
};
