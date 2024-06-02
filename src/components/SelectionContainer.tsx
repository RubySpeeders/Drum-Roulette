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
import Filter from "./Filter";
import { Ensemble } from "@/interfaces/ensemble";
import { Branch } from "@/interfaces/branch";

interface Props {
  musiciansData: Musician[];
  instrumentsData: Instrument[];
  ensemblesData: Ensemble[];
  branch: Branch;
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
  ensemblesData,
  branch,
}: Props) => {
  const classes = useStyles();
  const [musicians, setMusicians] = useState<Musician[]>(musiciansData);
  const [selectedMusicians, setSelectedMusicians] = useState<Musician[]>([]);
  const [selectedInstruments, setSelectedInstruments] = useState<Instrument[]>(
    []
  );
  const [filteredMusicians, setFilteredMusicians] =
    useState<Musician[]>(musicians);
  const [instruments, setInstruments] = useState<Instrument[]>(instrumentsData);
  const [ensembles, setEnsembles] = useState<Ensemble[]>(ensemblesData);
  const [selectedEnsembles, setSelectedEnsembles] =
    useState<Ensemble[]>(ensembles);
  const [checked, setChecked] = useState<Ensemble[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSelectAll = () => {
    const allEnsembles = ensembles.map((ensemble) => ensemble);
    setChecked(allEnsembles);
  };

  const handleDeselectAll = () => {
    setChecked([]);
  };

  const handleApplyFilter = () => {
    if (checked.length === 0) {
      // If nothing is checked, filter musicians to everything
      setFilteredMusicians(musicians);
      setSelectedEnsembles(ensembles);
    } else {
      // Filter musicians based on checked ensembles
      setSelectedEnsembles(
        ensembles.filter((ensemble) => checked.includes(ensemble))
      );
    }
    handleFilterToggle();
  };

  useEffect(() => {
    handleFilterChange(selectedEnsembles);
  }, [selectedEnsembles]);

  const handleFilterChange = (selectedEnsembles: Ensemble[]) => {
    // Filter musicians based on selected ensembles
    const updatedFilteredMusicians = musicians.filter((musician) =>
      selectedEnsembles.some(
        (ensemble) => musician.ensemble_id === ensemble.ensemble_id
      )
    );
    setFilteredMusicians(updatedFilteredMusicians);
  };

  const handleEnsembleChange = (ensemble: Ensemble) => {
    if (checked.includes(ensemble)) {
      setChecked(
        checked.filter(
          (checkedEnsemble) =>
            checkedEnsemble.ensemble_id !== ensemble.ensemble_id
        )
      );
    } else {
      setChecked([...checked, ensemble]);
    }
  };

  const selectedEqual =
    selectedInstruments.length === selectedInstruments.length;

  const isSelected =
    selectedInstruments.length >= 2 && selectedMusicians.length >= 2;

  const handleClickItem = (item: Musician | Instrument) => {
    if ("musician_id" in item) {
      // Handle Musicians
      if (
        selectedMusicians.some(
          (musician) => musician.musician_id === item.musician_id
        )
      ) {
        // Remove from selectedMusicians
        setSelectedMusicians(
          selectedMusicians.filter(
            (musician) => musician.musician_id !== item.musician_id
          )
        );
      } else {
        // Add to selectedMusicians
        setSelectedMusicians([...selectedMusicians, item]);
      }
    } else {
      // Handle Instruments
      if (
        selectedInstruments.some(
          (instrument) => instrument.instrument_id === item.instrument_id
        )
      ) {
        // Remove from selectedInstruments
        setSelectedInstruments(
          selectedInstruments.filter(
            (instrument) => instrument.instrument_id !== item.instrument_id
          )
        );
      } else {
        // Add to selectedInstruments
        setSelectedInstruments([...selectedInstruments, item]);
      }
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
                marginBottom: "5%",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Select Musicians
            </Typography>
            <Filter
              ensembles={ensembles}
              checked={checked}
              onChange={handleApplyFilter}
              isFilterOpen={isFilterOpen}
              handleChange={handleEnsembleChange}
              handleDeselectAll={handleDeselectAll}
              handleSelectAll={handleSelectAll}
              handleFilterToggle={handleFilterToggle}
            />
            <div className={classes.musicians}>
              {filteredMusicians.map((musician: Musician) => (
                <div
                  className={classNames(classes.card, {
                    [classes.selected]: selectedMusicians.some(
                      (selectedMusician) =>
                        selectedMusician.musician_id === musician.musician_id
                    ),
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
                    [classes.selected]: selectedInstruments.some(
                      (selectedInstrument) =>
                        selectedInstrument.instrument_id ===
                        instrument.instrument_id
                    ),
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
                  branchName: branch.branch_name,
                  branchId: branch.branch_id,
                  assignments: JSON.stringify(
                    assign(filteredMusicians, instruments)
                  ),
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
