import { ReactElement } from 'react';

export interface TableData {
  notifications: string;
  slim: TableRowData;
  basic: TableRowData;
  standard: TableRowData;
  professional: TableRowData;
  custom: TableRowData;
}

export type TableRowData = string | ReactElement;

export interface InquireProps {
  inquired?: boolean;
}

export type ModalType = { type: 'link' | 'submit' };
