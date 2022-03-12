import { descriptionOfBilling, descriptionOfPlans } from './PaymentMethodModal.constants';

export type formikInitialValues = {
  plan: keyof typeof descriptionOfPlans;
  billing: keyof typeof descriptionOfBilling;
  card: string;
  selectCardType: string;
  password: string;
  cn1: string;
  cn2: string;
  cn3: string;
  cn4: string;
  dateMounth: string;
  dateYear: string;
  birth: string;
  businessNumber: string;
  acceptTerms: boolean;
};
