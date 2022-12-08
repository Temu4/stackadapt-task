import React from 'react';
import { Box, Button } from '@mui/material';

const Todo = ({
  todo: { task, campaignId, campaignName, creativeId, creativeName },
  setSelectedIds
}) => (
  <Box
    key={campaignId}
    m={1}
    p={1}
    border={1}
    display='flex'
    alignItems='center'
    justifyContent='space-between'
  >
    <Box>
      <Box>{`Task: ${task}`}</Box>
      <Box>{`Campaign name: ${campaignName}`}</Box>
      {creativeName && <Box>{`Creative name: ${creativeName}`}</Box>}
    </Box>
    <Button onClick={() => setSelectedIds([campaignId, creativeId])}>
      Show
    </Button>
  </Box>
);

export default Todo;
