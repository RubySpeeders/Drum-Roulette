// React/ Next.js Imports
import { useState } from "react";

// Library Imports
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles, useTheme } from "@mui/styles";

// Type/ Interface Imports
import { Ensemble } from "@/interfaces/ensemble";

// Other component Imports
import CustomButton from "./CustomButton";

interface Props {
  ensembles: Ensemble[];
  onChange: (ensembles: Ensemble[]) => void;
}

const useStyles = makeStyles(() => ({
  container: { display: "flex", flexDirection: "column" },
  button: {
    border: "2px solid #E9E5F3",
    borderRadius: "10px",
    height: "50px",
    width: "308px",
    justifyContent: "space-between",
  },
  buttonContainer: { alignSelf: "center", marginTop: "1rem" },
  formContainer: {
    background: "#E9E5F3",
    borderRadius: "10px",
    padding: "1.5rem",
    position: "absolute",
    marginTop: "65px",
    width: "308px",
  },
}));

export default function Filter({ ensembles, onChange }: Props) {
  const [checked, setChecked] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSelectAll = () => {
    const allEnsembleIds = ensembles.map((ensemble) => ensemble.ensemble_id);
    setChecked(allEnsembleIds);
  };

  const handleDeselectAll = () => {
    setChecked([]);
  };

  const handleApplyFilter = () => {
    const selectedEnsembles = ensembles.filter((ensemble) =>
      checked.includes(ensemble.ensemble_id)
    );
    onChange(selectedEnsembles);
    handleFilterToggle();
  };

  const handleChange = (ensembleId: number) => {
    if (checked.includes(ensembleId)) {
      setChecked(checked.filter((id) => id !== ensembleId));
    } else {
      setChecked([...checked, ensembleId]);
    }
  };

  return (
    <div className={classes.container}>
      <Button onClick={handleFilterToggle} className={classes.button}>
        <Typography color={theme.palette.primary.light}>Filter </Typography>
        {isFilterOpen ? (
          <ExpandLessIcon style={{ color: theme.palette.primary.light }} />
        ) : (
          <ExpandMoreIcon style={{ color: theme.palette.primary.light }} />
        )}
      </Button>
      {isFilterOpen && (
        <FormControl className={classes.formContainer}>
          <div style={{ display: "flex" }}>
            <Button
              onClick={handleSelectAll}
              style={{ color: theme.palette.info.main }}
            >
              Select All
            </Button>
            <div
              style={{
                margin: ".2rem .3rem 0",
                color: theme.palette.info.main,
              }}
            >
              |
            </div>
            <Button
              onClick={handleDeselectAll}
              style={{ color: theme.palette.info.main }}
            >
              Deselect All
            </Button>
          </div>
          <FormGroup>
            {ensembles.map((ensemble) => (
              <FormControlLabel
                key={ensemble.ensemble_id}
                control={
                  <Checkbox
                    checked={checked.includes(ensemble.ensemble_id)}
                    onChange={() => handleChange(ensemble.ensemble_id)}
                  />
                }
                label={ensemble.ensemble_name}
                sx={{ color: theme.palette.primary.dark }}
              />
            ))}
            <div className={classes.buttonContainer}>
              <CustomButton onClick={handleApplyFilter}>Apply</CustomButton>
            </div>
          </FormGroup>
        </FormControl>
      )}
    </div>
  );
}
