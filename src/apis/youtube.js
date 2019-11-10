import axios from 'axios';

const KEY = 'AIzaSyClzvc63nNFxtDF4R6EvHtHkDtLV1i5LV4';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
}

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: baseParams
});