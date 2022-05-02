import axios from 'axios';
import { config } from '@/api/config';

export const ChampionAPI = async (id) => {
  return await axios
    .get(`${config.championUrl}${id}.json`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
