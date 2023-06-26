import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import Image, { StaticImageData } from "next/image";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "5%",
  },
  selected: {
    boxShadow: "0 0 0 5px #37A8FA",
  },
  image: {
    width: 200,
    height: 200,
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
  },
  musicians: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
}));

export default function SelectPlayers() {
  interface User {
    first_name: string;
    image: string;
    last_name: string;
    user_id: number;
    branch: Branch;
    band: Band;
    selected: boolean;
  }
  interface Branch {
    branch_id: number;
    nickname_id: number;
    branch_name: string;
  }
  interface Band {
    band_id: number;
    band_name: string;
  }
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

  const [musicians, setMusicians] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.pickyourdrum.link/users"
        );
        setMusicians(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [assignments, setAssignments] = useState<Assignment[]>([
    { name: "Chad", instrument: "bass drum" },
  ]);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    musicians.filter((name) => name.selected).length;

  const handleClickMusician = (item: User) => {
    const nextMusician = musicians.map((musician) => {
      if (musician.first_name === item.first_name) {
        return { ...musician, selected: !item.selected };
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
    <>
      <div>
        <Box className={classNames(classes.container)}>
          <h2>Select Payers</h2>
          <div className={classNames(classes.musicians)}>
            {musicians?.map((musician: User) => (
              <div key={musician.user_id} className={classNames(classes.card)}>
                <div
                  className={classNames(classes.image, {
                    [classes.selected]: musician.selected,
                  })}
                  key={musician.first_name}
                  onClick={() => handleClickMusician(musician)}
                >
                  <Image
                    src={musician.image}
                    alt={musician.first_name}
                    width={200}
                    height={280}
                  />
                </div>
                <Typography style={{ marginTop: "5%" }}>
                  {musician.first_name} {musician.last_name}
                </Typography>
              </div>
            ))}
          </div>
        </Box>
        <Box className={classNames(classes.container)}>
          <h2>Select Instruments</h2>
          <div>
            {instruments.map((instrument) => (
              <Card
                className={classNames(classes.image, {
                  [classes.selected]: instrument.selected,
                })}
                key={instrument.name}
                onClick={() => handleClickInstrument(instrument)}
              >
                <CardContent>
                  <Typography>{instrument.name}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Box>
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
    </>
  );
}
