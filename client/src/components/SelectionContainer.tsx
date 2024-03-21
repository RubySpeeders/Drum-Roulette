"use client";

// React/ Next.js Imports
import { useEffect, useState } from "react";
import Link from "next/link";

// Library Imports
import { Box, Grid, Typography } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
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
  message: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "830px",
    minHeight: "95px",
  },
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
    marginLeft: "5%",
  },
  button: {
    borderRadius: "3.75em",
    fontSize: "1rem",
    padding: ".75em 4.75em",
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

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      "&::before": {
        backgroundColor: "#F5F5F5",
      },
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#F5F5F5",
      color: "#4A2462",
      padding: 20,
      maxWidth: 330,
      maxHeight: 90,
      fontSize: theme.typography.pxToRem(16),
    },
  }));

  return (
    <Grid container>
      <Box className={classes.message}>
        <Typography
          style={{
            marginTop: "3%",
            marginBottom: "8%",
            marginLeft: "5%",
            fontSize: "32px",
            fontWeight: 600,
          }}
        >
          Please choose at least 2 musicians and 2 instruments, ensuring you
          have an equal number of both.
        </Typography>
      </Box>
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
            <CustomTooltip
              title="Please select at least 2 musicians and 2 instruments to continue."
              placement="top-end"
              arrow
            >
              <IconButton>
                <CustomButton
                  // className={classes.button}
                  variant="contained"
                  disabled={!isSelected || !selectedEqual}
                >
                  Assign
                </CustomButton>
              </IconButton>
            </CustomTooltip>
          </div>
        ) : (
          <Link
            href={{
              pathname: "/assignments",
              query: {
                assignments: JSON.stringify(assign(musicians, instruments)),
              },
            }}
          >
            <div className={classes.buttonContainer}>
              <CustomButton
                // className={classes.button}
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
  );
}
