import axios from 'axios';
import { config } from '@/api/config';

export const ChampionsAPI = async () => {
  return await axios
    .get(config.championsUrl)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
