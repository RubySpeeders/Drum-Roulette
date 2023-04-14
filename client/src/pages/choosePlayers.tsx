import { useState } from 'react';
import { shuffle } from 'lodash';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  card: {
    margin: '.25em',
    width: '50em',
  },
  selected: {
    border: 'solid #37A8FA',
  },
});

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

  const classes = useStyles();
  const [instruments, setInstruments] = useState<Instrument[]>([
    { instrument: 'bass drum', selected: false },
    { instrument: 'snare', selected: false },
    { instrument: 'triangle', selected: false },
  ]);

  const [musicians, setMusicians] = useState<Name[]>([
    { name: 'Chad', selected: false },
    { name: 'Nick', selected: false },
    { name: 'Brad', selected: false },
  ]);
  const [assignments, setAssignments] = useState<Assignment[]>([
    { name: 'Chad', instrument: 'bass drum' },
  ]);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    musicians.filter((name) => name.selected).length;

  const handleClickMusician = (item: Name) => {
    const nextName = musicians.map((name) => {
      if (name.name === item.name) {
        return { name: item.name, selected: !item.selected };
      } else {
        return name;
      }
    });
    setMusicians(nextName);
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
      {musicians.map((musician: Name) => (
        <Card
          className={`${classes.card} ${musician.selected && classes.selected}`}
          key={musician.name}
          onClick={() => handleClickMusician(musician)}
        >
          <CardContent>
            <Typography>{musician.name}</Typography>
          </CardContent>
        </Card>
      ))}
      <div>
        <h2>Instruments</h2>
        {instruments.map((instrument) => (
          <Card
            className={`${classes.card} ${
              instrument.selected && classes.selected
            }`}
            key={instrument.instrument}
            onClick={() => handleClickInstrument(instrument)}
          >
            <CardContent>
              <Typography>{instrument.instrument}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
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
