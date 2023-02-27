import { useState } from 'react';
import { Visibility, Weather, AlertMessage, NonSensitiveDiaryEntry } from '../types';
import { addEntry } from '../services/entries';
import axios from 'axios';

interface NewEntryProps {
  entries: Array<NonSensitiveDiaryEntry>;
  setEntries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}

const NewEntry = (props: NewEntryProps) => {
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    show: false,
    message: '',
  });
  const [date, setDate] = useState<string>('');
  const [visibility, setVisibility] = useState<Visibility>('great');
  const [weather, setWeather] = useState<Weather>('sunny');
  const [comment, setComment] = useState<string>('');

  const resetInputs = () => {
    setDate('');
    setComment('');
  };

  const showMessage = (message: string) => {
    setAlertMessage({ show: true, message });
    setTimeout(() => {
      setAlertMessage({ show: false, message: '' });
    }, 6000);
  };

  const entryCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const res = await addEntry({ date, weather, visibility, comment });
      const asNonSensitive: NonSensitiveDiaryEntry = {
        ...res,
        id: props.entries.length + 1,
      };
      props.setEntries(props.entries.concat(asNonSensitive));
      resetInputs();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showMessage(error.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {alertMessage.show ? (
        <strong style={{ color: 'red' }}>{alertMessage.message}</strong>
      ) : null}
      <form onSubmit={entryCreation}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <br />
        <br />
        <label>Visibility:</label>
        <div>
          great
          <input
            id="great"
            type="radio"
            name="visibility"
            onChange={() => setVisibility('great')}
            defaultChecked
          />
          good
          <input type="radio" name="visibility" onChange={() => setVisibility('good')} />
          ok
          <input type="radio" name="visibility" onChange={() => setVisibility('ok')} />
          poor
          <input type="radio" name="visibility" onChange={() => setVisibility('poor')} />
        </div>
        <br />
        <label>Weather:</label>
        <div>
          sunny{' '}
          <input
            type="radio"
            name="weather"
            onChange={() => setWeather('sunny')}
            defaultChecked
          />
          rainy <input type="radio" name="weather" onChange={() => setWeather('rainy')} />
          cloudy
          <input type="radio" name="weather" onChange={() => setWeather('cloudy')} />
          stormy
          <input type="radio" name="weather" onChange={() => setWeather('stormy')} />
          windy
          <input type="radio" name="weather" onChange={() => setWeather('windy')} />
        </div>
        <br />
        <label>Comment:</label>
        <input value={comment} onChange={(event) => setComment(event.target.value)} />
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewEntry;
