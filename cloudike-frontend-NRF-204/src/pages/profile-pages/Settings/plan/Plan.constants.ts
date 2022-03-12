import { PlanTypeIconWithLightningSvg, TrialPlanIconSvg } from '@components/SvgComponents';
import { plan, PlansPageProps } from './Plan.types';

export const plansData: plan[] = [
  { planName: 'Trial', planPrice: '0', fill: '#ffb41d', icon: TrialPlanIconSvg },
  { planName: 'Slim', planPrice: '18,000', fill: '#ffb41d', icon: PlanTypeIconWithLightningSvg },
  { planName: 'Basic', planPrice: '25,000', fill: '#ff9600', icon: PlanTypeIconWithLightningSvg },
  {
    planName: 'Standard',
    planPrice: '38,000',
    fill: '#ff7800',
    icon: PlanTypeIconWithLightningSvg,
  },
  {
    planName: 'Professional',
    planPrice: '98,000',
    fill: '#ff4e00',
    icon: PlanTypeIconWithLightningSvg,
  },
  { planName: 'Custom', planPrice: '0', fill: '#ff2a00', icon: PlanTypeIconWithLightningSvg },
];

export const mockedPlanData: PlansPageProps = {
  used: `10GB from 50GB used`,
  period: `2021`,
  card: `visa(****1234)`,
  notification: `The period of use has expired...`,
  price: '50, 000',
};
