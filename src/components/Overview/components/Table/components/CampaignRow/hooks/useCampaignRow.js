import { useState, useEffect } from 'react';

const useCampaignRow = ({ creatives, selectedIds }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const [, creativeId] = selectedIds;
    if (creativeId && creatives.some((creative) => creative.id === creativeId)) {
      setOpen(true);
    }
  }, [selectedIds, creatives]);

  return {
    open,
    setOpen,
  };
};

export default useCampaignRow;
