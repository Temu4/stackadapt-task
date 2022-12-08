import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Table as CampaignTable, Todo, TodoDialog } from './components';
import { useOverview } from './hooks';

const Overview = () => {
  const { campaigns, selectedIds, dialogOpen, todos, setSelectedIds, toggleDialog, addTodo } = useOverview();

  return (
    <Box>
      <Typography variant="h1" fontSize="32px">
        Overview
      </Typography>
      <Box className="App" display="flex" gap={3} maxHeight="500px">
        <Box overflow="scroll" width="100%">
          <CampaignTable campaigns={campaigns} selectedIds={selectedIds} />
        </Box>
        <Box border={1} width="100%" p={2} overflow="auto">
          <Typography variant="h2" fontSize="24px">
            Todos
          </Typography>
          <Button variant="contained" onClick={toggleDialog} sx={{ my: 1 }}>
            Add Todo
          </Button>
          <TodoDialog dialogOpen={dialogOpen} campaigns={campaigns} addTodo={addTodo} toggleDialog={toggleDialog} />
          {todos.map((todo) => (
            <Todo todo={todo} setSelectedIds={setSelectedIds} key={todo.todoId} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
