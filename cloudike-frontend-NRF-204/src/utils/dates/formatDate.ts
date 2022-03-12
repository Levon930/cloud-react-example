import { format as fnsDateFormat } from 'date-fns';

export const formatDate = (date: number | Date | string, format = 'yyy.MM.dd hh:mm') => {
  if (typeof date === 'string') {
    return fnsDateFormat(new Date(date), format);
  }

  return fnsDateFormat(date, format);
};
