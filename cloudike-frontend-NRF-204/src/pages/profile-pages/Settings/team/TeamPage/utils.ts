import { CompanyList } from '@api';

export function descendingComparator(a: CompanyList, b: CompanyList): number {
  if (!b.name || !a.name) return 0;
  if (b.name < a.name) {
    return -1;
  }
  if (b.name > a.name) {
    return 1;
  }

  return 0;
}

export function getComparator(order: 'desc' | 'asc'): (a: CompanyList, b: CompanyList) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b)
    : (a, b) => -descendingComparator(a, b);
}

export function stableSort<T>(array: CompanyList[], comparator: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [any, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

export const getRoleLabel = (role: string | null | undefined): string => {
  switch (role) {
    case 'company_admin':
      return 'Administrator';
    case 'user':
      return 'User';
    default:
      return '';
  }
};

export const usageHandler = (
  total: number | undefined | null,
  limit: number | undefined | null,
): string => {
  if (total === undefined || limit === undefined || total === null || limit === null) return '';
  const terabyte = 1099511627776;
  const gigabyte = 1073741824;
  const megabyte = 1048576;
  const kilobyte = 1024;
  const changeType = (item: number, type: number, typeName: string): string =>
    `${(item / type).toFixed(1)} ${typeName}`;
  const check = (item: number): string => {
    if (item >= terabyte) return changeType(item, terabyte, 'TB');
    if (item >= gigabyte) return changeType(item, gigabyte, 'GB');
    if (item >= megabyte) return changeType(item, megabyte, 'MB');
    if (item >= kilobyte) return changeType(item, kilobyte, 'KB');

    return `${item} bytes`;
  };

  return `${check(total)} of ${check(limit)}`;
};

export const modStatus = (status: string, isActive = true) => {
  if (!isActive) {
    switch (status) {
      case 'invited':
        return "Hasn't joined yet";
      default:
        return 'Expired';
    }
  }
  switch (status) {
    case 'common':
      return 'Active';
    case 'waiting_for_deletion':
      return 'Waiting for deletion';
    case 'waiting_for_transfer':
      return 'Waiting for transfer';
    default:
      return '';
  }
};
