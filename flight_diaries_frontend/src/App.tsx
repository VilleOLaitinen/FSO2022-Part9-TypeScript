import { getEntries } from './services/entries';
import { useState, useEffect } from 'react';
import { NonSensitiveDiaryEntry } from './types';
import Entries from './components/Entries';
import NewEntry from './components/NewEntry';

const App = () => {
  const [entries, setEntries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    getEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  return (
    <>
      <h2>Add new entry:</h2>
      <NewEntry entries={entries} setEntries={setEntries} />
      <h2>Diary entries:</h2>
      <Entries entries={entries} />
    </>
  );
};

export default App;
