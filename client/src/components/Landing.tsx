"use client";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

// Type/ Interface Imports
import { Branch } from "@/interfaces/branch";

// Other component Imports
import BranchLogo from "./BranchLogo";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2.5rem 4rem",
  },
  h2: {
    fontSize: "3rem",
    fontWeight: "600",
    margin: "0",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: ".5rem 0 0 0",
  },
  selectTextBox: {
    marginTop: "3rem",
    marginBottom: "1rem",
  },
}));

interface Props {
  branches: Branch[];
}

export default function Landing({ branches }: Props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.h2}>Hello!</h2>
        <h3 className={classes.h3}>
          Randomly generate band percussion assignments with just a few clicks.
        </h3>
        <div className={classes.selectTextBox}>
          <h3 className={classes.h3}>Select Branch</h3>
        </div>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {branches.map((branch) => (
            <BranchLogo branch={branch} key={branch.branch_id} />
          ))}
        </Grid>
      </div>
    </>
  );
}
