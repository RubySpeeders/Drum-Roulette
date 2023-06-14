import { useState } from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const useStyles = makeStyles({
  card: {
    margin: '.25em',
    width: '50em',
  },
  selected: {
    border: 'solid #37A8FA',
  },
});

export interface Musician {
  name: string;
  selected: boolean;
}

export interface Instrument {
  name: string;
  selected: boolean;
}

export interface Assignment {
  name: string;
  instrument: string;
}
export default function ChoosePlayers() {
  const classes = useStyles();
  const [instruments, setInstruments] = useState<Instrument[]>([
    { name: 'bass drum', selected: false },
    { name: 'snare', selected: false },
    { name: 'triangle', selected: false },
  ]);

  const [musicians, setMusicians] = useState<Musician[]>([
    { name: 'Chad', selected: false },
    { name: 'Nick', selected: false },
    { name: 'Brad', selected: false },
  ]);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    musicians.filter((name) => name.selected).length;

  const handleClickMusician = (item: Musician) => {
    const nextMusician = musicians.map((musician) => {
      if (musician.name === item.name) {
        return { name: item.name, selected: !item.selected };
      } else {
        return musician;
      }
    });
    setMusicians(nextMusician);
  };

  const handleClickInstrument = (item: Instrument) => {
    const nextInstrument = instruments.map((instrument) => {
      if (instrument.name === item.name) {
        return { name: item.name, selected: !item.selected };
      } else {
        return instrument;
      }
    });
    setInstruments(nextInstrument);
  };

  const router = useRouter();

  return (
    <div>
      <div>Choose Players</div>
      <h2>Names</h2>
      {musicians.map((musician: Musician) => (
        <Card
          className={classNames(classes.card, {
            [classes.selected]: musician.selected,
          })}
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
            key={instrument.name}
            onClick={() => handleClickInstrument(instrument)}
          >
            <CardContent>
              <Typography>{instrument.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          const selectedMusicians = musicians.filter(
            (musician) => musician.selected
          );
          const selectedInstruments = instruments.filter(
            (instrument) => instrument.selected
          );
          router.push({
            pathname: '/assignments',
            query: {
              musicians: JSON.stringify(selectedMusicians),
              instruments: JSON.stringify(selectedInstruments),
            },
          });
        }}
        disabled={!selectedEqual}
      >
        Give me assignments!
      </button>
    </div>
  );
}
