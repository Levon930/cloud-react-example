import { Box, Grid, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import styled from '@emotion/styled';
import { ComponentTypes } from './Plan.types';

const Container = styled(Grid)`
  ${({ theme }) => `
    padding: 25px 0;
    border-bottom: 1px solid ${theme.palette.grey[400]};
    align-items: center;
    justify-content: space-between;
  `}
`;

const Wrapper = styled(Box)`
  padding: 1rem;
  margin: 19px 0 0 39px;
  font-size: 14px;
`;

const Item = styled(Box)`
  padding: 20px 50px;
`;

const LefItem = styled(Grid)`
  ${({ theme }) => `
    width: 12vw;
    margin-right: 30px;
    color: ${theme.palette.grey[100]};
  `}
`;

const GridItem = styled(Grid)`
  ${({ theme }) => `
    display:flex;
    align-items: center;
    color: ${theme.palette.grey[900]};
    &:not(:last-child) {
      margin-right: 15px;
      padding: 6px 0;
    }
    & a {
      color: ${theme.palette.grey[200]};
      text-decoration: none;
    }
    button {
      padding: 0;
    }
  `}
`;

const PlanTypeBox = styled(GridItem)`
  margin: 0 50px 50px 0;
`;

const RowGroup = styled(Box)`
  display: flex;
  justify-self: flex-start;
  flex-grow: 1;
`;

const PlanType = styled(Grid)`
  ${({ theme }) => `
    font-size: 1.3em;
    margin: 0 26px 0 0;
    padding: 6px 8px;
    color: ${theme.palette.yellow[200]};
    font-weight: 600;
    & div {
      font-size: .8em;
      font-weight: 400;
      color: ${theme.palette.yellow[200]};
    }
  `}
`;

const TitleRow = styled(Box)`
  display: flex;
  align-items: center;
`;

const Title = styled(Typography)`
  ${({ theme }) => `
    color: ${theme.palette.grey[100]};
    font-size: 1.6em;
  `}
`;

const Row = styled(Grid)`
  ${({ theme }) => `
    border-bottom: 0.5px solid #f2f2f2;
    align-items: center;
    justify-content: flex-start;
    height: 5em;
    & a {
      color: ${theme.palette.grey[200]};
      text-decoration: none;
    }
  `}
`;

const Info = styled(Box)<ComponentTypes>`
  ${({ theme, expired }) => `
    color: ${expired ? theme.palette.red[100] : theme.palette.yellow[200]}
  `}
`;

const Arrow = styled(ArrowForwardIosIcon)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    font-size: 0.75em;
    margin-left: 5px;
  `}
`;

const PlanTypeWrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
`;

const PlanButtonWrapper = styled(Box)`
  button {
    margin-top: 0;
  }
`;

const OtherPlansWrapper = styled(Box)`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 7px 8px;
      &:hover {
        background: transparent;
      }
    }
    span:nth-of-type(1) {
      color: ${theme.palette.grey[200]};
      padding: 0;
      line-height: initial;
    }
    button {
      font-size: 1em;
    }
  `}
`;

const PaymentMethodModalWrapper = styled(Box)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    button {
      font-size: 1em;
      color: ${theme.palette.grey[900]};
      &:hover {
        background: transparent;
      }
    }
  `}
`;

export const Styled = {
  Container,
  Item,
  GridItem,
  PlanType,
  TitleRow,
  Title,
  Row,
  Wrapper,
  Info,
  LefItem,
  RowGroup,
  Arrow,
  PlanTypeBox,
  PlanTypeWrapper,
  PlanButtonWrapper,
  PaymentMethodModalWrapper,
  OtherPlansWrapper,
};
