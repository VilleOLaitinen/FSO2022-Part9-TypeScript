import axios from 'axios';
import { NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';

const baseUrl = 'http://localhost:3001/api/diaries';

export const getEntries = () => {
  return axios.get<NonSensitiveDiaryEntry[]>(baseUrl).then((response) => response.data);
};

export const addEntry = (object: NewDiaryEntry) => {
  return axios.post<NewDiaryEntry>(baseUrl, object).then((response) => response.data);
};
