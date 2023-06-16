import { useState } from "react";
import { shuffle } from "lodash";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import classNames from "classnames";
import chad from "../../public/assets/images/crummel-chad.jpg";
import randy from "../../public/assets/images/johnson-randy.jpg";
import james from "../../public/assets/images/swarts-james.jpg";
import riley from "../../public/assets/images/barnes-riley.jpg";
import jamesCromer from "../../public/assets/images/cromer-james.jpg";
import jeffrey from "../../public/assets/images/deroche-jeffrey.jpg";
import joseph from "../../public/assets/images/gonzalez-joseph.jpg";
import matthew from "../../public/assets/images/mitchener-matthew.jpg";
import nick from "../../public/assets/images/taylor-nick.jpg";

const useStyles = makeStyles({
  card: {
    margin: ".25em",
    width: "20em",
  },
  selected: {
    border: "solid #37A8FA",
  },
  image: {
    width: 200,
    height: 200,
    overflow: "hidden",
    borderRadius: "50%",
  },
});

export default function ChoosePlayers() {
  interface Musician {
    name: string;
    selected: boolean;
    img: StaticImageData;
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
    { name: "Randy Johnson", selected: false, img: randy },
    { name: "James Swarts", selected: false, img: james },
    { name: "Riley Barnes", selected: false, img: riley },
    { name: "James Cromer", selected: false, img: jamesCromer },
    { name: "Chad Crummel", selected: false, img: chad },
    { name: "Jeffrey DeRoche", selected: false, img: jeffrey },
    { name: "Joseph Gonzalez", selected: false, img: joseph },
    { name: "Nicholas Taylor", selected: false, img: nick },
    { name: "Matthew Mitchener", selected: false, img: matthew },
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
        return { name: item.name, selected: !item.selected, img: item.img };
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {musicians.map((musician: Musician) => (
          <div key={musician.name}>
            <div
              className={classNames(classes.image, {
                [classes.selected]: musician.selected,
              })}
              key={musician.name}
              onClick={() => handleClickMusician(musician)}
            >
              <Image
                src={musician.img}
                alt={musician.name}
                width={200}
                height={280}
              />
            </div>
            <Typography>{musician.name}</Typography>
          </div>
        ))}
      </div>
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
