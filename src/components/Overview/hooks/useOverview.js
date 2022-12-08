import { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';
import { fetchCampaigns } from '../../../api';

const useOverview = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setCampaigns(await fetchCampaigns());
    })();
  }, []);

  // Scrolls to the target campaign after pressing the "show" button. This code is working as expected.
  useEffect(() => {
    const [campaignId] = selectedIds;
    const row = document.getElementById(campaignId);
    row && row.scrollIntoView();
  }, [selectedIds]);

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const addTodo = (task, campaignId, creativeId) => {
    const { campaignName, creativeName } = campaigns.reduce(
      (acc, campaign) => {
        const { id, name, creatives } = campaign;

        if (id === campaignId) {
          acc.campaignName = name;

          if (creativeId) {
            const selectedCreative = creatives.find(({ id }) => id === creativeId);

            acc.creativeName = selectedCreative?.name || null;
          }
        }
        return acc;
      },
      {
        campaignName: null,
        creativeName: null,
      },
    );

    setTodos([
      ...todos,
      {
        task,
        todoId: uniqueId(),
        campaignId,
        creativeId,
        campaignName,
        creativeName,
      },
    ]);
  };

  return {
    campaigns,
    selectedIds,
    dialogOpen,
    todos,
    setSelectedIds,
    toggleDialog,
    addTodo,
  };
};

export default useOverview;
