import React from 'react';
import { useTranslation } from 'react-i18next';

import { PlanIconWrapper } from '@components/PlanIconWrapper';
import { PlanTypeIconWithLightningSvg } from '@components/SvgComponents';
import { PaymentHistoryModal, PlanModal } from '@pages/profile-pages/Settings/plan/modals';
import { PaymentMethodModal } from '@pages/profile-pages/Settings/plan/modals/PaymentMethodModal';
import { mockedPlanData, plansData } from '@pages/profile-pages/Settings/plan/Plan.constants';
import { ComponentTypes } from './Plan.types';

import { Styled } from './Plan.styled';

const Plan: React.FC<ComponentTypes> = ({ expired }) => {
  const { used, period, card, notification, price } = mockedPlanData;
  const { t } = useTranslation('plans');

  return (
    <Styled.Wrapper>
      <Styled.Title>{plansData[2].planName}</Styled.Title>
      <Styled.Container container>
        <Styled.TitleRow>
          <Styled.GridItem item>
            <PlanIconWrapper fill={plansData[2].fill}>
              <PlanTypeIconWithLightningSvg />
            </PlanIconWrapper>
          </Styled.GridItem>
          <Styled.PlanTypeWrapper>
            <Styled.PlanType item>
              {plansData[2].planName}
              <div>{`w ${price} / month`}</div>
            </Styled.PlanType>
            <Styled.GridItem item>{used}</Styled.GridItem>
            <Styled.GridItem item>
              <Styled.OtherPlansWrapper>
                <PlanModal type="link" />
                <Styled.Arrow />
              </Styled.OtherPlansWrapper>
            </Styled.GridItem>
          </Styled.PlanTypeWrapper>
        </Styled.TitleRow>
        <Styled.PlanButtonWrapper>
          <PlanModal type="submit" />
        </Styled.PlanButtonWrapper>
      </Styled.Container>
      <Styled.Row container>
        <Styled.RowGroup>
          <Styled.LefItem item>{t('plans.info.periodOfUse')}</Styled.LefItem>
          <Styled.Info expired={expired}>{notification}</Styled.Info>
        </Styled.RowGroup>
        <Styled.PaymentMethodModalWrapper>
          <PaymentHistoryModal />
          <Styled.Arrow />
        </Styled.PaymentMethodModalWrapper>
      </Styled.Row>
      <Styled.Row container>
        <Styled.RowGroup>
          <Styled.LefItem item>{t('plans.info.billingDate')}</Styled.LefItem>
          <Styled.GridItem item>{period}</Styled.GridItem>
        </Styled.RowGroup>
        <Styled.PaymentMethodModalWrapper>
          <PaymentMethodModal />
          <Styled.Arrow />
        </Styled.PaymentMethodModalWrapper>
      </Styled.Row>
      <Styled.Row container>
        <Styled.LefItem item>{t('plans.info.paymentInfo')}</Styled.LefItem>
        <Styled.GridItem item>{card}</Styled.GridItem>
      </Styled.Row>
      <Styled.Row container>
        <Styled.LefItem item>{t('plans.info.name')}</Styled.LefItem>
        <Styled.GridItem item>Sunny</Styled.GridItem>
      </Styled.Row>
    </Styled.Wrapper>
  );
};

export default Plan;
