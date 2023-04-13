import { useState } from 'react';
import { shuffle } from 'lodash';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function ChoosePlayers() {
  interface Name {
    name: string;
    selected: boolean;
  }
  interface Instrument {
    instrument: string;
    selected: boolean;
  }
  interface Assignment {
    name: string;
    instrument: string;
  }

  const [instruments, setInstruments] = useState<Instrument[]>([
    { instrument: 'bass drum', selected: false },
    { instrument: 'snare', selected: false },
    { instrument: 'triangle', selected: false },
  ]);

  const [names, setNames] = useState<Name[]>([
    { name: 'Chad', selected: false },
    { name: 'Nick', selected: false },
    { name: 'Brad', selected: false },
  ]);
  const [assignments, setAssignments] = useState<Assignment[]>([
    { name: 'Chad', instrument: 'bass drum' },
  ]);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    names.filter((name) => name.selected).length;

  const handleClickName = (item: Name) => {
    const nextName = names.map((name) => {
      if (name.name === item.name) {
        return { name: item.name, selected: !item.selected };
      } else {
        return name;
      }
    });
    setNames(nextName);
  };

  const handleClickInstrument = (item: Instrument) => {
    const nextInstrument = instruments.map((instrument) => {
      if (instrument.instrument === item.instrument) {
        return { instrument: item.instrument, selected: !item.selected };
      } else {
        return instrument;
      }
    });
    setInstruments(nextInstrument);
  };

  const router = useRouter();

  const assign = (names: Name[], instruments: Instrument[]) => {
    // const assignment: Assignment = { name: "", instrument: "" }
    const shuffledNames = shuffle(names.filter((name) => name.selected));
    const shuffledInstruments = shuffle(
      instruments.filter((instrument) => instrument.selected)
    );
    const nextAssignment = shuffledNames.map((name, i) => {
      return { name: name.name, instrument: shuffledInstruments[i].instrument };
    });
    setAssignments(nextAssignment);
  };

  return (
    <div>
      <div>Choose Players</div>
      <h2>Names</h2>
      {names
        .filter((name) => !name.selected)
        .map((name) => (
          <Card
            style={{ border: 'solid blue', margin: '.25em', width: '50em' }}
            key={name.name}
            onClick={() => handleClickName(name)}
          >
            <CardContent>
              <Typography>{name.name}</Typography>
            </CardContent>
          </Card>
        ))}
      <div>
        <p>Selected Names</p>
        {names
          .filter((name) => name.selected)
          .map((name) => (
            <Card
              style={{ border: 'solid blue', margin: '.25em', width: '50em' }}
              key={name.name}
              onClick={() => handleClickName(name)}
            >
              <CardContent>
                <Typography>{name.name}</Typography>
              </CardContent>
            </Card>
          ))}
      </div>
      <div>
        <h2>Instruments</h2>
        {instruments
          .filter((instrument) => !instrument.selected)
          .map((instrument) => (
            <Card
              style={{ border: 'solid red', margin: '.25em', width: '50em' }}
              key={instrument.instrument}
              onClick={() => handleClickInstrument(instrument)}
            >
              <CardContent>
                <Typography>{instrument.instrument}</Typography>
              </CardContent>
            </Card>
          ))}
      </div>
      <Typography>Selected Instruments</Typography>
      {instruments
        .filter((instrument) => instrument.selected)
        .map((instrument) => (
          <Card
            style={{ border: 'solid red', margin: '.25em', width: '50em' }}
            key={instrument.instrument}
            onClick={() => handleClickInstrument(instrument)}
          >
            <CardContent>
              <Typography>{instrument.instrument}</Typography>
            </CardContent>
          </Card>
        ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          // assign(names, instruments);
          router.push({
            pathname: '/assignments',
            query: { object: JSON.stringify(assignments) },
          });
        }}
        disabled={!selectedEqual}
      >
        Give me assignments!
      </button>
    </div>
  );
}
