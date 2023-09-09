import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import Image, { StaticImageData } from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import axios from "axios";
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

export default function Selection() {
  const classes = useStyles();
  const [instruments, setInstruments] = useState<Instrument[]>([
    {
      id: 1,
      name: "Bass Drum",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/BD_pic.png",
    },
    {
      id: 2,
      name: "Snare Drum",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/SD_pic.png",
    },
    {
      id: 3,
      name: "Tenor Drum",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/TD_pic.png",
    },
    {
      id: 4,
      name: "Cymbals",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/Cym_pic.png",
    },
    {
      id: 5,
      name: "BD & Cym",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/BD_Cym_pic.png",
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [musicians, setMusicians] = useState<Musician[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.pickyourdrum.link/users"
        );
        setMusicians(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    musicians.filter((name) => name.selected).length;

  const handleClickMusician = (item: Musician) => {
    const nextMusician = musicians.map((musician) => {
      if (musician.user_id === item.user_id) {
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
            <h2>Select Musicians</h2>
            <div className={classNames(classes.musicians)}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {musicians.map((musician: Musician) => (
                    <div
                      key={musician.user_id}
                      className={classNames(classes.card)}
                    >
                      <div
                        className={classNames(classes.image, {
                          [classes.selected]: musician.selected,
                        })}
                        key={musician.user_id}
                        onClick={() => handleClickMusician(musician)}
                      >
                        <Image
                          priority={true}
                          src={musician.image}
                          alt={`select ${musician.first_name}`}
                          width={200}
                          height={280}
                        />
                      </div>
                      <Typography style={{ marginTop: "5%" }}>
                        {musician.first_name} {musician.last_name}
                      </Typography>
                    </div>
                  ))}
                </>
              )}
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
                      alt={`select ${instrument.name}`}
                      width={200}
                      height={200}
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
      <Button
        variant="contained"
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
        type={'button'}
      >
        Give me assignments!
      </Button>
    </>
  );
}
