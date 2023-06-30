import { useState } from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
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
import BD from "../../public/assets/images/instruments/BD_pic.png";
import SD from "../../public/assets/images/instruments/SD_pic.png";
import Cym from "../../public/assets/images/instruments/Cym_pic.png";
import TD from "../../public/assets/images/instruments/TD_pic.png";
import BDCym from "../../public/assets/images/instruments/BD_Cym_pic.png";
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
    marginLeft: "2%",
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
    { id: 1, name: "Bass Drum", selected: false, img: BD },
    { id: 2, name: "Snare Drum", selected: false, img: SD },
    { id: 3, name: "Tenor Drum", selected: false, img: TD },
    { id: 4, name: "Cymbals", selected: false, img: Cym },
    { id: 5, name: "BD & Cym", selected: false, img: BDCym },
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
        return { ...instrument, selected: !item.selected };
      } else {
        return instrument;
      }
    });
    setInstruments(nextInstrument);
  };

  const router = useRouter();

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={classNames(classes.container)}>
            <h2>Select Payers</h2>
            <div className={classNames(classes.musicians)}>
              {musicians.map((musician: Musician) => (
                <div key={musician.name} className={classNames(classes.card)}>
                  <div
                    className={classNames(classes.image, {
                      [classes.selected]: musician.selected,
                    })}
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classNames(classes.container)}>
            <h2>Select Instruments</h2>
            <div className={classNames(classes.musicians)}>
              {instruments.map((instrument: Instrument) => (
                <div key={instrument.name} className={classNames(classes.card)}>
                  <div
                    className={classNames(classes.image, {
                      [classes.selected]: instrument.selected,
                    })}
                    key={instrument.name}
                    onClick={() => handleClickInstrument(instrument)}
                  >
                    <Image
                      src={instrument.img}
                      alt={instrument.name}
                      width={200}
                    />
                  </div>
                  <Typography style={{ marginTop: "5%" }}>
                    {instrument.name}
                  </Typography>
                </div>
              ))}
            </div>
          </Box>
        </Grid>
      </Grid>
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
