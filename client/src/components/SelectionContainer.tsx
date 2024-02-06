"use client";

// React/ Next.js Imports
import { useEffect, useState } from "react";
import Link from "next/link";

// Library Imports
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Type/ Interface Imports
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";

// Other component Imports
import { CustomButton } from "./CustomButton";
import { ItemCard } from "./ItemCard";

// Styles or CSS Imports
import assign from "@/utils/assign";
import classNames from "classnames";

interface Props {
  musiciansData: Musician[];
  instrumentsData: Instrument[];
}

const useStyles = makeStyles(() => ({
  selected: {
    boxShadow: "0 0 0 5px #D745D1",
    borderRadius: "100px",
    height: "200px",
  },
  musicians: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function SelectionContainer({
  musiciansData,
  instrumentsData,
}: Props) {
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

  const handleClickItem = (item: Musician | Instrument) => {
    if ("musician_id" in item) {
      const nextMusicians = musicians.map((musician) => {
        if (musician.musician_id === item.musician_id) {
          return { ...musician, selected: !item.selected };
        } else {
          return musician;
        }
      });
      setMusicians(nextMusicians);
    } else {
      const nextInstruments = instruments.map((instrument) => {
        if (instrument.name === item.name) {
          return { ...instrument, selected: !item.selected };
        } else {
          return instrument;
        }
      });
      setInstruments(nextInstruments);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6} className={classes.grid}>
        <Box className={classes.grid}>
          <h2>Select Musicians</h2>
          <div className={classes.musicians}>
            {musicians.map((musician: Musician) => (
              <div
                className={classNames({
                  [classes.selected]: musician.selected,
                })}
              >
                <ItemCard
                  key={musician.musician_id}
                  item={musician}
                  onClick={() => handleClickItem(musician)}
                />
              </div>
            ))}
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className={classes.grid}>
          <h2>Select Instruments</h2>
          <div className={classes.musicians}>
            {instruments.map((instrument: Instrument) => (
              <div
                className={classNames({
                  [classes.selected]: instrument.selected,
                })}
              >
                <ItemCard
                  key={instrument.instrument_id}
                  item={instrument}
                  onClick={() => handleClickItem(instrument)}
                />
              </div>
            ))}
          </div>
        </Box>
        {/* only render link tag if selection criteria are met */}
        {!isSelected || !selectedEqual ? (
          <CustomButton
            variant="contained"
            disabled={!isSelected || !selectedEqual}
          >
            Assign
          </CustomButton>
        ) : (
          <Link
            href={{
              pathname: "/assignments",
              query: {
                assignments: JSON.stringify(assign(musicians, instruments)),
              },
            }}
          >
            <CustomButton
              variant="contained"
              disabled={!isSelected || !selectedEqual}
            >
              Assign
            </CustomButton>
          </Link>
        )}
        <Link href="/">
          <Typography>Return to homepage</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
