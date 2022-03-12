import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Route, useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Box, MenuItem } from '@material-ui/core';

import { FormCheckbox, FormWrapper, Input, RadioGroup, Select } from '@components';
import { toaster } from '@helpers';
import { useModal, useQueryParams } from '@hooks';
import { paths } from '@utils/routes/settings-routes';
import PaymentAvailabilityTable from './PaymentAvailabilityTable';
import {
  billingTypes,
  descriptionOfBilling,
  descriptionOfPlans,
  initialValues,
  planTypes,
  pricesOfPlans,
} from './PaymentMethodModal.constants';
import { useValidationSchema } from './PaymentMethodModal.validation';

import { Styled } from './PaymentMethodModal.styled';

const PaymentMethodModal: React.FC = () => {
  const { RenderModal } = useModal();
  const { t } = useTranslation('plans');
  const { t: t2 } = useTranslation('paymentMethodModal');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();

  const queryParams = useQueryParams();

  useEffect(() => {
    const plan: string | null = queryParams.get('plan');
    for (const [, value] of Object.entries(planTypes)) {
      if (plan === value.nameUpperCase) {
        initialValues.plan = value.name;
        break;
      }
      if (plan === 'Professional' && plan !== value.nameUpperCase) {
        initialValues.plan = planTypes.Basic.name;
      }
    }

    const billing: string | null = queryParams.get('billing');
    if (billing === billingTypes.Monthly.nameLowerCase) {
      initialValues.billing = billingTypes.Monthly.name;
    } else {
      initialValues.billing = billingTypes.Annual.name;
    }
  }, [queryParams]);

  const handleOpenModal = () => {
    push(`/${paths.planSettingsPaymentMethod}`);
  };

  return (
    <>
      <Styled.OpenModalButton type="button" onClick={handleOpenModal}>
        {t('plans.titles.method')}
      </Styled.OpenModalButton>
      <Route
        path={`/${paths.planSettingsPaymentMethod}`}
        exact
        render={() => (
          <RenderModal title={t2('titles.modalTitle')}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => {
                toaster('submit function is not realized', 'error');
              }}
              validateOnChange
              validateOnBlur
            >
              {(formik) => {
                return (
                  <Form>
                    <FormWrapper>
                      <Styled.FlexBoxContainer>
                        <Styled.LeftSide>
                          <Styled.LeftSideTitle>{t2('titles.planTitle')}</Styled.LeftSideTitle>
                          <Styled.Divider />
                          <Styled.RadioGroupContainer>
                            <RadioGroup
                              name="plan"
                              items={[
                                { name: `${t2('planTypes.Slim')}`, id: 'Slim' },
                                { name: `${t2('planTypes.Basic')}`, id: 'Basic' },
                                { name: `${t2('planTypes.Standard')}`, id: 'Standard' },
                                { name: `${t2('planTypes.Professional')}`, id: 'Professional' },
                              ]}
                            />
                          </Styled.RadioGroupContainer>
                          <Styled.Description>
                            {t2('titles.planDescriptionFirstPart')}
                            <Styled.DescriptionBold>
                              {t2('titles.planDescriptionSecondPart')}
                            </Styled.DescriptionBold>
                            {t2('titles.planDescriptionThirdPart')}
                            <Styled.ALink>{t2('titles.planCustomerService')}</Styled.ALink>.
                          </Styled.Description>
                          <Styled.LeftSideTitle>{t2('titles.billingTitle')}</Styled.LeftSideTitle>
                          <Styled.Divider />
                          <Styled.RadioGroupContainer>
                            <RadioGroup
                              name="billing"
                              items={[
                                {
                                  name: `${t2('billingTypes.Annual')} ${
                                    pricesOfPlans[formik.values.plan].Annual
                                  }`,
                                  id: 'Annual',
                                },
                                {
                                  name: `${t2('billingTypes.Monthly')}  ${
                                    pricesOfPlans[formik.values.plan].Monthly
                                  }`,
                                  id: 'Monthly',
                                },
                              ]}
                            />
                          </Styled.RadioGroupContainer>
                          <Styled.LeftSideTitle>{t2('titles.cardTitle')}</Styled.LeftSideTitle>
                          <Styled.Divider />
                          <Styled.RadioGroupContainer>
                            <RadioGroup
                              name="card"
                              items={[
                                { name: `${t2('cardTypes.Domestic')}`, id: 'Domestic' },
                                { name: `${t2('cardTypes.Foreign')}`, id: 'Foreign' },
                              ]}
                            />
                          </Styled.RadioGroupContainer>
                          <Styled.SelectWrapper>
                            <Select name="selectCardType">
                              <MenuItem value="Named">{t2('cardTypes.Named')}</MenuItem>
                              <MenuItem value="Anonymous">{t2('cardTypes.Anonymous')}</MenuItem>
                            </Select>
                          </Styled.SelectWrapper>
                          {formik.values.card === 'Domestic' && (
                            <Styled.InputsWrapper>
                              <Styled.FlexBox>
                                <Styled.NameBox>{t2('titles.inputs.CardNumber')}</Styled.NameBox>
                                <Styled.InputContainerSecond>
                                  {/* TODO: note, no validation messages */}
                                  <Input
                                    name="cn1"
                                    // placeholder="XXXX"
                                    inputProps={{ maxlength: '4' }}
                                  />
                                  <Input name="cn2" inputProps={{ maxlength: '4' }} />
                                  <Input name="cn3" inputProps={{ maxlength: '4' }} />
                                  <Input name="cn4" inputProps={{ maxlength: '4' }} />
                                </Styled.InputContainerSecond>
                              </Styled.FlexBox>
                              <Styled.FlexBox>
                                <Styled.NameBox>
                                  {t2('titles.inputs.ExpirationDate')}
                                </Styled.NameBox>
                                <Styled.InputContainerSecond>
                                  {/* TODO: note, no validation messages */}
                                  <Input
                                    name="dateMounth"
                                    placeholder="MM"
                                    inputProps={{ maxlength: '2' }}
                                  />
                                  <Input
                                    name="dateYear"
                                    placeholder="YYYY"
                                    inputProps={{ maxlength: '4' }}
                                  />
                                </Styled.InputContainerSecond>
                              </Styled.FlexBox>
                              <Styled.FlexBox>
                                <Styled.NameBox>{t2('titles.inputs.Password')}</Styled.NameBox>
                                <Styled.InputContainer>
                                  {/* TODO: note, no validation message */}
                                  <Input
                                    name="password"
                                    placeholder="The first two digits"
                                    inputProps={{ maxlength: '2' }}
                                  />
                                </Styled.InputContainer>
                              </Styled.FlexBox>
                              {formik.values.selectCardType === 'Named' ? (
                                <Styled.FlexBox>
                                  <Styled.NameBox>{t2('titles.inputs.Birth')}</Styled.NameBox>
                                  {/* TODO: note, no validation message */}
                                  <Styled.InputContainer>
                                    <Input name="birth" placeholder="YY/MM/DD" />
                                  </Styled.InputContainer>
                                </Styled.FlexBox>
                              ) : (
                                <Styled.FlexBox>
                                  <Styled.NameBox>
                                    {t2('titles.inputs.BusinessNumber')}
                                  </Styled.NameBox>
                                  {/* TODO: note, no validation message */}
                                  <Styled.InputContainer>
                                    <Input name="businessNumber" placeholder="XXXXXXXXXX" />
                                  </Styled.InputContainer>
                                </Styled.FlexBox>
                              )}
                            </Styled.InputsWrapper>
                          )}
                        </Styled.LeftSide>
                        <Styled.RightSide>
                          <Styled.PlanType>{formik.values.plan}</Styled.PlanType>
                          <Styled.Title>
                            {`${
                              formik.values.billing === 'Annual'
                                ? t2('billingTypes.Annual')
                                : t2('billingTypes.Monthly')
                            } ${t2('billingName')} ${
                              pricesOfPlans[formik.values.plan][formik.values.billing]
                            }/${
                              formik.values.billing === 'Annual'
                                ? t2('billingTypes.Annual')
                                : t2('billingTypes.Monthly')
                            }`}
                          </Styled.Title>
                          <Styled.DividerYellow />
                          <Styled.InfoWrapper>
                            <Styled.Info>
                              <Trans>{descriptionOfPlans[formik.values.plan]}</Trans>
                            </Styled.Info>
                            <Styled.Info>
                              <Trans>paymentMethodModal:priceDescription</Trans>
                            </Styled.Info>
                            <Styled.Info>
                              <Trans>{descriptionOfBilling[formik.values.billing]}</Trans>
                            </Styled.Info>
                          </Styled.InfoWrapper>
                          <Styled.Divider />
                          <Box>
                            <PaymentAvailabilityTable />
                          </Box>
                          <Styled.TermsCheckboxWrapper>
                            <FormCheckbox name="acceptTerms" label={t2('acceptLabel')} />
                          </Styled.TermsCheckboxWrapper>
                          <Styled.SubmitButton type="submit">{t2('submit')}</Styled.SubmitButton>
                        </Styled.RightSide>
                      </Styled.FlexBoxContainer>
                    </FormWrapper>
                  </Form>
                );
              }}
            </Formik>
          </RenderModal>
        )}
      />
    </>
  );
};

export default PaymentMethodModal;
