import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';

import { useModal } from '@hooks';
import { paths } from '@utils/routes/settings-routes';
import { Availability } from './components';
import { InquireProps, ModalType, TableData, TableRowData } from './PlanModal.types';

import { Styled } from './PlanModal.styled';

function createData(
  notifications: string,
  slim: TableRowData,
  basic: TableRowData,
  standard: TableRowData,
  professional: TableRowData,
  custom: TableRowData,
): TableData {
  return { notifications, slim, basic, standard, professional, custom };
}

const PlanModal: FC<ModalType & InquireProps> = ({ type, inquired }) => {
  const { setIsOpen, RenderModal } = useModal();
  const { push } = useHistory();
  const { t } = useTranslation('plans');
  const [value, setValue] = useState('annual');
  const plans = t('plans.planTypes', { returnObjects: true });
  const conditions = t('plans.rules', { returnObjects: true });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOpenModal = () => {
    push(`/${paths.planSettingsChange}`);
    setIsOpen(true);
  };

  const rows = [
    createData(t('plans.planDescriptions.storageSize'), '50GB', '30GB', '100GB', '300GB', '300GB'),
    createData(t('plans.planDescriptions.numberOfUsers'), '5', '10', '50', '#', '#'),
    createData(
      t('plans.planDescriptions.pcClient'),
      <Availability availability={false} />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.webDrive'),
      <Availability availability={false} />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.linkage'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.filePreview'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.comment'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.fileVersioning'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.linkSharing'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.Watermark'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.restrictionOfDownload'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.restrictionOfEditing'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
    createData(
      t('plans.planDescriptions.checkLog'),
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
      <Availability availability />,
    ),
  ];

  return (
    <>
      {type === 'link' ? (
        <Styled.ChoosePlanButton type="button" onClick={handleOpenModal}>
          {t('plans.titles.planChoose')}
        </Styled.ChoosePlanButton>
      ) : (
        <Styled.ChangePlanButton
          type="button"
          color="primary"
          variant="contained"
          onClick={handleOpenModal}
        >
          {t('plans.info.changePlan')}
        </Styled.ChangePlanButton>
      )}
      <Route
        path={`/${paths.planSettingsChange}`}
        exact
        render={() => (
          <RenderModal title={t('plans.changePlans.title')}>
            <Styled.ModalContainer>
              <TableContainer>
                <Table size="small" aria-label="a dense table">
                  <Styled.Head inquired={inquired}>
                    <TableRow>
                      <TableCell>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="plan"
                            name="plan"
                            value={value}
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="annual"
                              control={<Styled.Radio />}
                              label={t('plans.changePlans.annualBilling')}
                            />
                            <FormControlLabel
                              value="monthly"
                              control={<Styled.Radio />}
                              label={t('plans.changePlans.monthlyBilling')}
                            />
                          </RadioGroup>
                        </FormControl>
                      </TableCell>
                      {plans.map(({ name, price, discount }) => {
                        return (
                          <TableCell align="center" key={name}>
                            <Styled.TableCellWrapper>
                              <Typography>{name}</Typography>
                              <Styled.PriceTypography>
                                {value === 'annual' ? discount : `W ${price}/month`}
                              </Styled.PriceTypography>
                              {inquired ? (
                                <Button color="secondary" variant="contained">
                                  <Link
                                    to={`/${paths.planSettingsPaymentMethod}?plan=${name}&billing=${value}`}
                                  >
                                    {t('plans.buttons.inquire')}{' '}
                                  </Link>
                                </Button>
                              ) : (
                                <Button color="primary" variant="contained">
                                  <Link
                                    to={`/${paths.planSettingsPaymentMethod}?plan=${name}&billing=${value}`}
                                  >
                                    {t('plans.buttons.buy')}{' '}
                                  </Link>
                                </Button>
                              )}
                            </Styled.TableCellWrapper>
                          </TableCell>
                        );
                      })}

                      <TableCell align="center">
                        <Styled.TableCellWrapper>
                          <Typography>{t('plans.custom.name')}</Typography>
                          <Typography> {t('plans.custom.price')}</Typography>
                          <Typography>1811-9811</Typography>
                          {inquired ? (
                            <Button color="secondary" variant="contained">
                              {' '}
                              <Link to={`/${paths.planSettingsPaymentMethod}?billing=${value}`}>
                                {t('plans.buttons.inquire')}{' '}
                              </Link>
                            </Button>
                          ) : (
                            <Button color="primary" variant="contained">
                              <Link to={`/${paths.planSettingsPaymentMethod}?billing=${value}`}>
                                {t('plans.buttons.buy')}{' '}
                              </Link>
                            </Button>
                          )}
                        </Styled.TableCellWrapper>
                      </TableCell>
                    </TableRow>
                  </Styled.Head>
                  <Styled.TableContent>
                    {rows.map(({ notifications, slim, basic, standard, professional, custom }) => (
                      <Styled.Row key={notifications}>
                        <Styled.Column component="th" scope="row">
                          {notifications}
                        </Styled.Column>
                        <Styled.Column align="center">{slim}</Styled.Column>
                        <Styled.Column align="center">{basic}</Styled.Column>
                        <Styled.Column align="center">{standard}</Styled.Column>
                        <Styled.Column align="center">{professional}</Styled.Column>
                        <Styled.Column align="center">{custom}</Styled.Column>
                      </Styled.Row>
                    ))}
                  </Styled.TableContent>
                </Table>
              </TableContainer>
              <ul>
                {conditions.map(({ id, text }) => {
                  return <li key={id}>{text}</li>;
                })}
              </ul>
            </Styled.ModalContainer>
          </RenderModal>
        )}
      />
    </>
  );
};
export default PlanModal;
