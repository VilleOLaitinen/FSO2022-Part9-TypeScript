import { NonSensitiveDiaryEntry } from '../types';

interface EntriesProps {
  entries: Array<NonSensitiveDiaryEntry>;
}

const Entries = (props: EntriesProps) => {
  return (
    <>
      {props.entries.map((entry) => (
        <div key={entry.id}>
          <h4>{entry.date}</h4>
          <>
            visibility: {entry.visibility}
            <br />
            weather: {entry.weather}
          </>
        </div>
      ))}
    </>
  );
};

export default Entries;
