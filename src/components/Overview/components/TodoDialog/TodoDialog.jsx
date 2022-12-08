import React from 'react';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { useTodoDialog } from './hooks';

const TodoDialog = ({ dialogOpen, campaigns, addTodo, toggleDialog }) => {
  const {
    task,
    setTask,
    setCampaignId,
    toggleTarget,
    creativeId,
    setCreativeId,
    campaignId,
    inputErrors,
    setToggle,
    handleAddClick,
    handleCloseDialog,
  } = useTodoDialog({
    addTodo,
    toggleDialog,
  });

  return (
    <Dialog open={dialogOpen}>
      <DialogTitle>Add Todos</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} my={1}>
          <TextField label="Task" value={task} onChange={(e) => setTask(e.target.value)} error={inputErrors.task} />

          <Alert severity="info">A campaign needs to be selected before selecting a creative</Alert>
          <ToggleButtonGroup color="primary" value={toggleTarget} exclusive onChange={setToggle}>
            <ToggleButton value="campaign">Campaign</ToggleButton>
            <ToggleButton value="creative" disabled={!campaignId}>
              Creative
            </ToggleButton>
          </ToggleButtonGroup>

          <FormControl>
            <InputLabel id="target-campaign-select">Target Campaign</InputLabel>
            <Select
              labelId="target-campaign-select"
              label="Target Campaign"
              value={campaignId}
              onChange={(e) => setCampaignId(e.target.value)}
              error={inputErrors.campaignId}
            >
              {campaigns.map(({ id, name }) => (
                <MenuItem value={id} key={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {toggleTarget === 'creative' && (
            <FormControl>
              <InputLabel id="target-creative-select">Target Creative</InputLabel>
              <Select
                labelId="target-creative-select"
                label="Target Creative"
                value={creativeId}
                onChange={(e) => setCreativeId(e.target.value)}
                error={inputErrors.creativeId}
              >
                {campaigns
                  .find((campaign) => campaign.id === campaignId)
                  .creatives.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleAddClick}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDialog;
