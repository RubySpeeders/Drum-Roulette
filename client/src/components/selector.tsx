"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";
import Link from "next/link";
import assign from "@/utils/assign";
import { SelectItemCard } from "./selectItemCard";

interface Props {
  musiciansData: Musician[];
  instrumentsData: Instrument[];
}

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

export default function Selector({ musiciansData, instrumentsData }: Props) {
  const classes = useStyles();
  const [musicians, setMusicians] = useState<Musician[]>(musiciansData);
  const [instruments, setInstruments] = useState<Instrument[]>(instrumentsData);

  const [isSelected, setIsSelected] = useState(false);

  const selectedEqual =
    instruments.filter((instrument) => instrument.selected).length ===
    musicians.filter((name) => name.selected).length;

  useEffect(() => {
    const selectedInstrumentsCount = instruments.filter(
      (instrument) => instrument.selected
    ).length;
    const selectedMusiciansCount = musicians.filter(
      (musician) => musician.selected
    ).length;

    // Check if at least two instruments and two musicians are selected
    const isSelected =
      selectedInstrumentsCount >= 2 && selectedMusiciansCount >= 2;

    setIsSelected(isSelected);
  }, [instruments, musicians]);

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

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={classNames(classes.container)}>
            <h2>Select Musicians</h2>
            <div className={classNames(classes.musicians)}>
              {musicians.map((musician: Musician) => (
                <SelectItemCard
                  item={musician}
                  handleClick={handleClickMusician}
                />
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
                      priority={true}
                      src={instrument.img || "asdfadf"}
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
      {/* only render link tag if selection criteria are met */}
      {!isSelected || !selectedEqual ? (
        <Button
          variant="contained"
          disabled={!isSelected || !selectedEqual}
          type={"button"}
        >
          Give me assignments!
        </Button>
      ) : (
        <Link
          href={{
            pathname: "/assignments",
            query: {
              assignments: JSON.stringify(assign(musicians, instruments)),
            },
          }}
        >
          <Button
            variant="contained"
            disabled={!isSelected || !selectedEqual}
            type={"button"}
          >
            Give me assignments!
          </Button>
        </Link>
      )}
    </>
  );
}
