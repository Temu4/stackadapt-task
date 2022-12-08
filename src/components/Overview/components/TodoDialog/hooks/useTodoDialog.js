import { useState } from 'react';
import { DEFAULT_TOGGLE_TARGET, DEFAULT_INPUT_ERRORS_STATE } from '../constants';

const useTodoDialog = ({ addTodo, toggleDialog }) => {
  const [inputErrors, setInputErrors] = useState(DEFAULT_INPUT_ERRORS_STATE);
  const [task, setTask] = useState('');
  const [campaignId, setCampaignId] = useState('');
  const [creativeId, setCreativeId] = useState('');
  const [toggleTarget, setToggleTarget] = useState(DEFAULT_TOGGLE_TARGET);

  const setToggle = (e) => {
    const value = e.target.value;

    setToggleTarget(value);

    if (value === 'campaign') {
      setCreativeId('');
    }
  };

  const handleValidation = ({ task, campaignId, creativeId }) => {
    const newErrorsState = {
      task: !task,
      campaignId: !campaignId,
      creativeId: toggleTarget !== DEFAULT_TOGGLE_TARGET && !creativeId,
    };

    setInputErrors(newErrorsState);
    return Object.values(newErrorsState).some(Boolean);
  };

  const handleCloseDialog = () => {
    toggleDialog();

    setInputErrors(DEFAULT_INPUT_ERRORS_STATE);
    setToggleTarget(DEFAULT_TOGGLE_TARGET);
    setTask('');
    setCampaignId('');
    setCreativeId('');
  };

  const handleAddClick = () => {
    const isError = handleValidation({ task, campaignId, creativeId });
    if (isError) return;

    addTodo(task, campaignId, creativeId);

    handleCloseDialog();
  };

  return {
    task,
    setTask,
    toggleTarget,
    setCampaignId,
    creativeId,
    setCreativeId,
    campaignId,
    inputErrors,
    setToggle,
    handleAddClick,
    handleCloseDialog,
  };
};

export default useTodoDialog;
