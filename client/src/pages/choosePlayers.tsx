import { useState } from "react";
import { shuffle } from "lodash";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import classNames from "classnames";

const useStyles = makeStyles({
  card: {
    margin: ".25em",
    // width: "30em",
  },
  selected: {
    border: "solid #37A8FA",
  },
});

export default function ChoosePlayers() {
  interface Musician {
    name: string;
    selected: boolean;
  }
  interface Instrument {
    name: string;
    selected: boolean;
  }
  interface Assignment {
    name: string;
    instrument: string;
  }

  const classes = useStyles();
  const [instruments, setInstruments] = useState<Instrument[]>([
    { name: "bass drum", selected: false },
    { name: "snare", selected: false },
    { name: "triangle", selected: false },
  ]);

  const [musicians, setMusicians] = useState<Musician[]>([
    { name: "Chad", selected: false },
    { name: "Nick", selected: false },
    { name: "Brad", selected: false },
    { name: "Chad", selected: false },
    { name: "Nick", selected: false },
    { name: "Brad", selected: false },
  ]);
  const [assignments, setAssignments] = useState<Assignment[]>([
    { name: "Chad", instrument: "bass drum" },
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

  const assign = (names: Musician[], instruments: Instrument[]) => {
    // const assignment: Assignment = { name: "", instrument: "" }
    const shuffledNames = shuffle(names.filter((name) => name.selected));
    const shuffledInstruments = shuffle(
      instruments.filter((instrument) => instrument.selected)
    );
    const nextAssignment = shuffledNames.map((name, i) => {
      return { name: name.name, instrument: shuffledInstruments[i].name };
    });
    setAssignments(nextAssignment);
  };

  return (
    <div>
      <div>Choose Players</div>
      <h2>Names</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      </div>
      <div>
        <h2>Instruments</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          // assign(names, instruments);
          router.push({
            pathname: "/assignments",
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
