import { CompanyList } from '@api';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof CompanyList | 'detailed_authority';
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface User {
  login?: string | null;
  name?: string | null;
  userid: number;
  is_active?: boolean | null;
  ip_restriction?: boolean | null;
  allowed_ips?: string | null;
  user_mobile_restriction?: boolean | null;
  pc_can_download?: boolean | null;
  can_download?: boolean | null;
  can_print?: boolean | null;
  use_watermarks?: boolean | null;
  status?: string | null;
}
