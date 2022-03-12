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
