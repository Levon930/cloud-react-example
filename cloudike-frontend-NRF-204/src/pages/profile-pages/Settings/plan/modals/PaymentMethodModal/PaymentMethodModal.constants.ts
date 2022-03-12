import { formikInitialValues } from './PaymentMethodModal.types';

export const initialValues: formikInitialValues = {
  plan: 'Basic',
  billing: 'Annual',
  card: 'Domestic',
  selectCardType: 'Named',
  password: '',
  cn1: '',
  cn2: '',
  cn3: '',
  cn4: '',
  dateMounth: '',
  dateYear: '',
  birth: '',
  businessNumber: '',
  acceptTerms: false,
};

export const planTypes = {
  Slim: {
    nameUpperCase: 'SLIM',
    name: 'Slim',
  },
  Basic: {
    nameUpperCase: 'BASIC',
    name: 'Basic',
  },
  Standard: {
    nameUpperCase: 'STANDARD',
    name: 'Standard',
  },
  Professional: {
    nameUpperCase: 'PROFESSIONAL',
    name: 'Professional',
  },
};

export const billingTypes = {
  Annual: {
    nameLowerCase: 'annual',
    name: 'Annual',
  },
  Monthly: {
    nameLowerCase: 'monthly',
    name: 'Monthly',
  },
};

export const descriptionOfPlans = {
  [planTypes.Slim.name]: 'paymentMethodModal:descriptionOfPlans.Slim',
  [planTypes.Basic.name]: 'paymentMethodModal:descriptionOfPlans.Basic',
  [planTypes.Standard.name]: 'paymentMethodModal:descriptionOfPlans.Standard',
  [planTypes.Professional.name]: 'paymentMethodModal:descriptionOfPlans.Professional',
};

export const descriptionOfBilling = {
  [billingTypes.Annual.name]: 'paymentMethodModal:descriptionOfBilling.Annual',
  [billingTypes.Monthly.name]: 'paymentMethodModal:descriptionOfBilling.Monthly',
};

export const pricesOfPlans = {
  [planTypes.Slim.name]: {
    [billingTypes.Annual.name]: '1000',
    [billingTypes.Monthly.name]: '200',
  },
  [planTypes.Basic.name]: {
    [billingTypes.Annual.name]: '2000',
    [billingTypes.Monthly.name]: '400',
  },
  [planTypes.Standard.name]: {
    [billingTypes.Annual.name]: '4000',
    [billingTypes.Monthly.name]: '800',
  },
  [planTypes.Professional.name]: {
    [billingTypes.Annual.name]: '10000',
    [billingTypes.Monthly.name]: '2000',
  },
};

export const availability = [
  { availability: true, name: 'paymentMethodModal:availabilityNames.Client' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.WebDrive' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.Versioning' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.Preview' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.Watermark' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.Comment' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.Log' },
  { availability: true, name: 'paymentMethodModal:availabilityNames.Permission' },
];
