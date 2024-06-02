// React/ Next.js Imports
import { useState } from "react";

// Library Imports
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Popover,
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
  checked: Ensemble[];
  isFilterOpen: boolean;
  onChange: () => void;
  handleChange: (ensemble: Ensemble) => void;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleFilterToggle: () => void;
}

const useStyles = makeStyles(() => ({
  container: { display: "flex", flexDirection: "column", marginTop: "5%" },
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
    width: "308px",
  },
}));

const Filter = ({
  ensembles,
  onChange,
  handleChange,
  checked,
  isFilterOpen,
  handleDeselectAll,
  handleSelectAll,
  handleFilterToggle,
}: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    handleFilterToggle();
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    handleFilterToggle();
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <Button onClick={handleButtonClick} className={classes.button}>
        <Typography color={theme.palette.primary.light}>Filter</Typography>
        {isFilterOpen ? (
          <ExpandLessIcon style={{ color: theme.palette.primary.light }} />
        ) : (
          <ExpandMoreIcon style={{ color: theme.palette.primary.light }} />
        )}
      </Button>
      <Popover
        open={isFilterOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: -15, // Add a 5px space
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px", // Override the default border radius
          },
        }}
      >
        <FormControl className={classes.formContainer}>
          <Typography style={{ color: theme.palette.primary.dark }}>
            Ensemble
          </Typography>
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
                    checked={checked.includes(ensemble)}
                    onChange={() => handleChange(ensemble)}
                  />
                }
                label={ensemble.ensemble_name}
                sx={{ color: theme.palette.primary.dark }}
              />
            ))}
            <div className={classes.buttonContainer}>
              <CustomButton onClick={onChange}>Apply</CustomButton>
            </div>
          </FormGroup>
        </FormControl>
      </Popover>
    </div>
  );
};

export default Filter;
