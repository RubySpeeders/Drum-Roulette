import { useState } from "react";
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
import { Ensemble } from "@/interfaces/ensemble";
import CustomButton from "./CustomButton";

interface Props {
  ensembles: Ensemble[];
  onChange: (ensembles: Ensemble[]) => void;
}

export default function Filter({ ensembles, onChange }: Props) {
  const [checked, setChecked] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        onClick={handleFilterToggle}
        sx={{
          border: "2px solid #E9E5F3",
          borderRadius: "10px",
          height: "50px",
          width: "308px",
          justifyContent: "space-between",
        }}
      >
        <Typography color="#E9E5F3">Filter </Typography>
        {isFilterOpen ? (
          <ExpandLessIcon style={{ color: "#E9E5F3" }} />
        ) : (
          <ExpandMoreIcon style={{ color: "#E9E5F3" }} />
        )}
      </Button>
      {isFilterOpen && (
        <FormControl
          sx={{
            background: "#E9E5F3",
            borderRadius: "10px",
            padding: "1.5rem",
            position: "absolute",
            marginTop: "65px",
            width: "308px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Button onClick={handleSelectAll} style={{ color: "#D745D1" }}>
              Select All
            </Button>
            <div style={{ margin: "5px 5px", color: "#D745D1" }}>|</div>
            <Button onClick={handleDeselectAll} style={{ color: "#D745D1" }}>
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
                sx={{ color: "#4A2462" }}
              />
            ))}
            <div style={{ alignSelf: "center", marginTop: "1rem" }}>
              <CustomButton onClick={handleApplyFilter}>Apply</CustomButton>
            </div>
          </FormGroup>
        </FormControl>
      )}
    </div>
  );
}
