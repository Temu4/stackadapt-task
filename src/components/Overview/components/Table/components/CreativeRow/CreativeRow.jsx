import React, { memo } from 'react';
import { TableRow, TableCell } from '@mui/material';

const CreativeRow = ({ creative: { id, name, imgData }, highlight }) => (
  <TableRow key={id} sx={[highlight && { border: '2px solid blue' }]}>
    <TableCell>{name}</TableCell>
    <TableCell>{imgData}</TableCell>
  </TableRow>
);

export default memo(CreativeRow);
