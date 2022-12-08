import { uniqueId } from 'lodash';

// Generates a random string.
// Ex. "xsxhizeo"
const generateRandomString = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');

const campaigns = [...Array(100).keys()].map((key) => ({
  id: uniqueId(),
  name: `campaign-${generateRandomString()}`,
  budget: Math.random() * 100,
  impressions: Math.floor(Math.random() * 10000),
  creatives: [...Array(Math.ceil(Math.random() * 5)).keys()].map((creative) => ({
    id: uniqueId(),
    name: `creative-${generateRandomString()}`,
    imgData: `data:image/png;base64, ${generateRandomString()}`,
  })),
}));

const sleep = (sleepForInMs) =>
  new Promise((resolve) => {
    setTimeout(resolve, sleepForInMs);
  });

const fetchCampaigns = async () => {
  // Simulate async fetching
  await sleep(2000);

  return campaigns;
};

export default fetchCampaigns;
