import React from 'react';
import { Trans } from 'react-i18next';

import CheckMarkIcon from 'components/SvgComponents/CheckMarkIcon';
import { availability } from './PaymentMethodModal.constants';

import { Styled } from './PaymentMethodModal.styled';

const PaymentAvailabilityTable: React.FC = () => {
  return (
    <Styled.FlexColumnBox>
      <Styled.FlexTable>
        {availability.map(({ name, availability }) => (
          <Styled.RowAvailability key={name}>
            <Styled.AvailabilityIconContainer>
              {availability ? <CheckMarkIcon /> : '-'}
            </Styled.AvailabilityIconContainer>
            <Styled.RowName>
              <Trans>{name}</Trans>
            </Styled.RowName>
          </Styled.RowAvailability>
        ))}
      </Styled.FlexTable>
    </Styled.FlexColumnBox>
  );
};

export default PaymentAvailabilityTable;
