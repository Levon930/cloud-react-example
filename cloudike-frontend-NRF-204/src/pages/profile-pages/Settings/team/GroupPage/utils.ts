import { Group } from '@api';

export function descendingComparator(a: Group, b: Group, orderBy: 'name' | 'users'): number {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

export function getComparator(
  order: 'desc' | 'asc',
  orderBy: 'name' | 'users',
): (a: Group, b: Group) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: Group[], comparator: (a: T, b: T) => number): T[] {
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
