export enum HeaderId {
  name = 'name',
  users = 'users',
  detailed_authority = 'detailed_authority',
}

export interface HeadCell {
  disablePadding: boolean;
  id: HeaderId;
  label: string;
  numeric: boolean;
}

export enum SortBy {
  name = 'name',
  users = 'users',
}

export enum Order {
  desc = 'desc',
  asc = 'asc',
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: SortBy) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}
