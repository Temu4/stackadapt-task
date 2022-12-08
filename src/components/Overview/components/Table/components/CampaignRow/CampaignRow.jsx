import React, { memo } from 'react';
import { TableRow, TableCell, IconButton, Collapse } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { CreativeTable } from '..';
import { useCampaignRow } from './hooks';

const CampaignRow = ({ id, name, budget, impressions, creatives, selectedIds, highlight }) => {
  const { open, setOpen } = useCampaignRow({ creatives, selectedIds });

  return (
    <>
      <TableRow id={id} sx={[highlight && { border: '2px solid blue' }]}>
        <TableCell>
          <IconButton onClick={() => setOpen(!open)}>{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{`$${budget.toFixed(2)}`}</TableCell>
        <TableCell>{impressions}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4} sx={{ py: 0 }}>
          <Collapse in={open}>
            <CreativeTable creatives={creatives} selectedIds={selectedIds} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default memo(CampaignRow);
