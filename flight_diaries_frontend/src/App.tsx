import { getEntries } from './services/entries';
import { useState, useEffect } from 'react';
import { NonSensitiveDiaryEntry } from './types';
import Entries from './components/Entries';

const App = () => {
  const [entries, setEntries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    getEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  return (
    <>
      <h2>Diary entries:</h2>
      <Entries entries={entries} />
    </>
  );
};

export default App;
