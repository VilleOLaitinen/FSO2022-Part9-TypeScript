import axios from 'axios';
import { NonSensitiveDiaryEntry } from '../types';

const baseUrl = 'http://localhost:3001/api/diaries';

export const getEntries = () => {
  return axios.get<NonSensitiveDiaryEntry[]>(baseUrl).then((response) => response.data);
};
