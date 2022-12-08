import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from '@mui/material';
import { CampaignRow } from './components';
import { useTable } from './hooks';
import { TABLE_COLUMNS_STATE } from './constants';

const CampaignTable = ({ campaigns, selectedIds }) => {
  const { sort, handleChangeTableSorting } = useTable();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          {TABLE_COLUMNS_STATE.map(({ id: columnId, label: columnLabel }) => (
            <TableCell>
              <TableSortLabel
                active={true}
                direction={sort[columnId]}
                onClick={() => handleChangeTableSorting(columnId)}
              >
                {columnLabel}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {!campaigns?.length
          ? 'Loading...'
          : campaigns.map((props) => (
              <CampaignRow {...props} id={props.id} key={props.id} selectedIds={selectedIds} highlight={false} />
            ))}
      </TableBody>
    </Table>
  );
};

export default CampaignTable;
