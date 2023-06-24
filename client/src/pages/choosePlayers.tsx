import { useState } from "react";
import Image from "next/image";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import classNames from "classnames";
import chad from "../../public/assets/images/musicians/crummel-chad.jpg";
import randy from "../../public/assets/images/musicians/johnson-randy.jpg";
import james from "../../public/assets/images/musicians/swarts-james.jpg";
import riley from "../../public/assets/images/musicians/barnes-riley.jpg";
import jamesCromer from "../../public/assets/images/musicians/cromer-james.jpg";
import jeffrey from "../../public/assets/images/musicians/deroche-jeffrey.jpg";
import joseph from "../../public/assets/images/musicians/gonzalez-joseph.jpg";
import matthew from "../../public/assets/images/musicians/mitchener-matthew.jpg";
import nick from "../../public/assets/images/musicians/taylor-nick.jpg";
import { makeStyles } from "@mui/styles";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";

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

export default function ChoosePlayers() {
  const classes = useStyles();
  const [instruments, setInstruments] = useState<Instrument[]>([
    { id: 1, name: "TD", selected: false },
    { id: 2, name: "SD", selected: false },
    { id: 3, name: "Cymbals", selected: false },
    { id: 4, name: "BD", selected: false },
    { id: 5, name: "BD & Cymbals", selected: false },
  ]);

  const [musicians, setMusicians] = useState<Musician[]>([
    { id: 1, name: "Randy Johnson", selected: false, img: randy },
    { id: 2, name: "James Swarts", selected: false, img: james },
    { id: 3, name: "Riley Barnes", selected: false, img: riley },
    { id: 4, name: "James Cromer", selected: false, img: jamesCromer },
    { id: 5, name: "Chad Crummel", selected: false, img: chad },
    { id: 6, name: "Jeffrey DeRoche", selected: false, img: jeffrey },
    { id: 7, name: "Joseph Gonzalez", selected: false, img: joseph },
    { id: 8, name: "Nicholas Taylor", selected: false, img: nick },
    { id: 9, name: "Matthew Mitchener", selected: false, img: matthew },
  ]);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    musicians.filter((name) => name.selected).length;

  const handleClickMusician = (item: Musician) => {
    const nextMusician = musicians.map((musician) => {
      if (musician.name === item.name) {
        return {
          name: item.name,
          selected: !item.selected,
          img: item.img,
          id: item.id,
        };
      } else {
        return musician;
      }
    });
    setMusicians(nextMusician);
  };

  const handleClickInstrument = (item: Instrument) => {
    const nextInstrument = instruments.map((instrument) => {
      if (instrument.name === item.name) {
        return { name: item.name, selected: !item.selected, id: item.id };
      } else {
        return instrument;
      }
    });
    setInstruments(nextInstrument);
  };

  const router = useRouter();

  return (
    <>
      <div>
        <Box className={classNames(classes.container)}>
          <h2>Select Payers</h2>
          <div className={classNames(classes.musicians)}>
            {musicians.map((musician: Musician) => (
              <div key={musician.id} className={classNames(classes.card)}>
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
                <Typography style={{ marginTop: "5%" }}>
                  {musician.name}
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
                key={instrument.id}
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
            pathname: "/assignments",
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
    </>
  );
}
