import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

import { Pagination } from '@components';
import { useModal } from '@hooks';
import { paths } from '@utils/routes/settings-routes';
import PaymentHistoryIcon from 'components/SvgComponents/PaymentHistoryIcon';
import { paymentHistoryData, rowsPerPage } from './PaymentHistoryModal.constants';
import { PaymentHistoryTableHead } from './TableHead';

import { Styled } from './PaymentHistoryModal.styled';

const PaymentHistoryModal: React.FC = () => {
  const { RenderModal } = useModal();
  const { t } = useTranslation('plans');
  const { push } = useHistory();

  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const handleOpenModal = () => {
    push(`/${paths.planSettingsPaymentHistory}`);
  };

  return (
    <>
      <Styled.OpenModalButton type="button" onClick={handleOpenModal}>
        {t('plans.titles.payments')}
      </Styled.OpenModalButton>
      <Route
        path={`/${paths.planSettingsPaymentHistory}`}
        exact
        render={() => (
          <RenderModal title="Payment history">
            <Styled.TableContainerWrapper>
              <TableContainer>
                <Table>
                  <PaymentHistoryTableHead />
                  <TableBody>
                    {paymentHistoryData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item) => (
                        <TableRow key={item.paymentDate}>
                          <TableCell component="th" scope="row">
                            {item.plan}
                          </TableCell>
                          <TableCell align="center">{item.charge}</TableCell>
                          <TableCell align="center">{item.paymentDate}</TableCell>
                          <TableCell align="center">{item.period}</TableCell>
                          <TableCell align="center">
                            <Styled.Link href={`/${item.reseipt}`}>
                              <PaymentHistoryIcon />
                            </Styled.Link>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <Styled.PaginationWrapper>
                  <Pagination
                    count={Math.ceil(paymentHistoryData.length / rowsPerPage)}
                    onChange={handleChangePage}
                    page={page + 1}
                    showFirstButton
                    showLastButton
                  />
                </Styled.PaginationWrapper>
              </TableContainer>
            </Styled.TableContainerWrapper>
          </RenderModal>
        )}
      />
    </>
  );
};

export default PaymentHistoryModal;
