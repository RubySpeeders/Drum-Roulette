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
import CustomButton from "./CustomButton";
import ItemCard from "./ItemCard";

// Styles or CSS Imports
import assign from "@/utils/assign";
import classNames from "classnames";

interface Props {
  musiciansData: Musician[];
  instrumentsData: Instrument[];
  branchName: Branch_Name;
}

const useStyles = makeStyles(() => ({
  selected: {
    boxShadow: "0 0 0 5px #D745D1",
    borderRadius: "100px",
    height: "150px",
  },
  musicians: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  buttonContainer: {
    margin: "2rem",
    padding: "5px",
    width: "80%",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  returnLink: {
    marginTop: "0.5rem",
    textDecoration: "underline white 0.100rem solid",
  },
  card: {
    margin: 15,
  },
}));

const SelectionContainer = ({
  musiciansData,
  instrumentsData,
  branchName,
}: Props) => {
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
        if (instrument.instrument_id === item.instrument_id) {
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
      <Grid
        container
        sx={{
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          marginTop: "3rem",
        }}
      >
        <Grid item xs={12} md={6} className={classes.grid}>
          <Box className={classes.grid}>
            <Typography
              style={{
                marginLeft: "5%",
                marginBottom: "5%",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Select Musicians
            </Typography>
            <div className={classes.musicians}>
              {musicians.map((musician: Musician) => (
                <div
                  className={classNames(classes.card, {
                    [classes.selected]: musician.selected,
                  })}
                  key={musician.musician_id}
                >
                  <ItemCard
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
            <Typography
              style={{
                marginLeft: "5%",
                marginBottom: "5%",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Select Instruments
            </Typography>
            <div className={classes.musicians}>
              {instruments.map((instrument: Instrument) => (
                <div
                  className={classNames(classes.card, {
                    [classes.selected]: instrument.selected,
                  })}
                  key={instrument.instrument_id}
                >
                  <ItemCard
                    item={instrument}
                    onClick={() => handleClickItem(instrument)}
                  />
                </div>
              ))}
            </div>
          </Box>
          {/* only render link tag if selection criteria are met */}
          {!isSelected || !selectedEqual ? (
            <div className={classes.buttonContainer}>
              <CustomButton
                variant="contained"
                disabled={!isSelected || !selectedEqual}
              >
                Assign
              </CustomButton>
            </div>
          ) : (
            <Link
              href={{
                pathname: "/assignments",
                query: {
                  branch: branchName,
                  assignments: JSON.stringify(assign(musicians, instruments)),
                },
              }}
            >
              <div className={classes.buttonContainer}>
                <CustomButton
                  variant="contained"
                  disabled={!isSelected || !selectedEqual}
                >
                  Assign
                </CustomButton>
              </div>
            </Link>
          )}
          <div className={classes.buttonContainer}>
            <div className={classes.returnLink}>
              <Link href="/">
                <Typography color="white">Return to homepage</Typography>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default SelectionContainer;
