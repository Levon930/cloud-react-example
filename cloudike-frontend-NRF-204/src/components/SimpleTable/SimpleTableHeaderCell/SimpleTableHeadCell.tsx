import { useState } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';

import { SortOrder } from '@api';
import { SimpleHeaderCellProps } from './SimpleTableHeadCell.types';

const SimpleTableHeaderCell = (props: SimpleHeaderCellProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Asc);
  const [isActive, setActive] = useState(false);

  const { onSort, sortable, label, id } = props;

  const handleOnSortChange = () => {
    const order = sortOrder === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc;
    setSortOrder(order);

    setActive(true);
    onSort?.({ order, orderBy: id });
  };

  return (
    <TableCell>
      {sortable ? (
        <TableSortLabel active={isActive} direction={sortOrder as any} onClick={handleOnSortChange}>
          {label}
        </TableSortLabel>
      ) : (
        label
      )}
    </TableCell>
  );
};

export default SimpleTableHeaderCell;
