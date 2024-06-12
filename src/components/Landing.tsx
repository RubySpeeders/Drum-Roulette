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
    marginLeft: "3rem",
    marginRight: "3rem",
    padding: "2.5rem 0 0",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.5rem",
      marginRight: "1.75rem",
      paddingTop: "1.5rem",
    },
  },
  h2: {
    fontSize: "3rem",
    fontWeight: "600",
    margin: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: ".5rem 0 0 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  selectTextBox: {
    marginTop: "3rem",
    marginBottom: "1rem",
  },
}));

interface Props {
  branches: Branch[];
}

const Landing = ({ branches }: Props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.h2}>Hello!</h2>
        <h3 className={classes.h3}>
          Randomly generate band percussion assignments with just a few clicks.
        </h3>
        <div className={classes.selectTextBox}>
          <h3 className={classes.h3}>Please Select Your Branch</h3>
        </div>
        <Grid
          container
          style={{
            gap: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {branches?.map((branch) => (
            <BranchLogo branch={branch} key={branch.branch_id} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Landing;
