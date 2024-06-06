"use client";

// React/ Next.js Imports
import { useEffect, useState } from "react";
import Link from "next/link";

// Library Imports
import { Box, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";

// Type/ Interface Imports
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";
import { Branch } from "@/interfaces/branch";
import { Ensemble } from "@/interfaces/ensemble";

// Other component Imports
import CustomButton from "./CustomButton";
import ItemCard from "./ItemCard";
import CustomTooltip from "./CustomTooltip";

// Utility Imports
import assign from "@/utils/assign";
import classNames from "classnames";
import Filter from "./Filter";

interface Props {
  musiciansData: Musician[];
  instrumentsData: Instrument[];
  ensemblesData: Ensemble[];
  branch: Branch;
}

const useStyles = makeStyles(() => ({
  message: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "830px",
    minHeight: "95px",
  },
  musicians: {
    marginTop: "5%",
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
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          direction={"column"}
          alignItems={"flex-start"}
        >
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
              <div className={classes.card} key={musician.musician_id}>
                <ItemCard
                  item={musician}
                  onClick={() => handleClickItem(musician)}
                />
              </div>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          direction={"column"}
          alignItems={"flex-start"}
        >
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
              <div className={classes.card} key={instrument.instrument_id}>
                <ItemCard
                  item={instrument}
                  onClick={() => handleClickItem(instrument)}
                />
              </div>
            ))}
          </div>
          {/* only render link tag if selection criteria are met */}
          {!isSelected || !selectedEqual ? (
            <div className={classes.buttonContainer}>
              <CustomTooltip
                title="Please select at least 2 musicians and 2 instruments to continue."
                placement="top-end"
                arrow
              >
                <IconButton>
                  <CustomButton variant="contained">Assign</CustomButton>
                </IconButton>
              </CustomTooltip>
            </div>
          ) : (
            <Link
              href={{
                pathname: "/assignments",
                query: {
                  branchName: branch.branch_name,
                  branchId: branch.branch_id,
                  assignments: JSON.stringify(
                    assign(selectedMusicians, selectedInstruments)
                  ),
                },
              }}
            >
              <div className={classes.buttonContainer}>
                <CustomButton variant="contained">Assign</CustomButton>
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
