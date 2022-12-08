import React, { memo } from 'react';
import { TableRow, TableCell, Table, TableHead, TableBody } from '@mui/material';
import { CreativeRow } from '..';

export const CreativeTable = ({ creatives }) => (
  <Table sx={{ my: 2 }}>
    <TableHead>
      <TableRow>
        <TableCell>Creative Name</TableCell>
        <TableCell>Image Data</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {creatives.map((creative) => (
        <CreativeRow key={creative.id} creative={creative} highlight={false} />
      ))}
    </TableBody>
  </Table>
);

export default memo(CreativeTable);
