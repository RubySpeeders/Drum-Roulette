"use client";

import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";
import Link from "next/link";
import assign from "@/utils/assign";
import { ItemCard } from "./itemCard";
import { CustomButton } from "./CustomButton";

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
    if ("user_id" in item) {
      const nextMusicians = musicians.map((musician) => {
        if (musician.user_id === item.user_id) {
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
    <>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.grid}>
          <Box className={classNames(classes.container)}>
            <h2>Select Musicians</h2>
            <div className={classNames(classes.musicians)}>
              {musicians.map((musician: Musician) => (
                <ItemCard
                  key={musician.user_id}
                  item={musician}
                  onClick={() => handleClickItem(musician)}
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
                <ItemCard
                  key={instrument.id}
                  item={instrument}
                  onClick={() => handleClickItem(instrument)}
                />
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
        </Grid>
      </Grid>
    </>
  );
}
