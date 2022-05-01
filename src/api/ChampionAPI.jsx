import axios from 'axios';
import { config } from '@/api/config';

export const ChampionAPI = async () => {
  return await axios
    .get(config.championsUrl)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
