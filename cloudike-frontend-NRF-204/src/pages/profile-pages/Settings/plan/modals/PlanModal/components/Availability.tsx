import React from 'react';

import CheckMarkIcon from 'components/SvgComponents/CheckMarkIcon';
import { AvailabilityProps } from './Availability.types';

const Availability: React.FC<AvailabilityProps> = ({ availability }) => {
  return <>{availability ? <CheckMarkIcon /> : '-'}</>;
};
export default Availability;
