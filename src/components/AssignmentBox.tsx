"use client";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

// Type/ Interface Imports
import { Assignment } from "@/interfaces/assignment";

// Component Imports
import ItemCard from "@/components/ItemCard";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "3.25rem .75rem .75rem .75rem",
    border: ".12em dashed #E9E5F3",
    borderRadius: "12px",
    position: "relative",
    minWidth: "250px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2rem",
    },
  },
  color: {
    height: "2.25rem",
    width: "17.5rem",
    borderRadius: "60px",
    margin: "0 auto -1.25rem auto",
    position: "relative",
    zIndex: "5",
    [theme.breakpoints.down("sm")]: {
      height: "1.5rem",
      width: "10.5rem",
      margin: "0 auto -0.75rem auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1rem",
      width: "6.5rem",
      margin: "0 auto -0.5rem auto",
    },
  },
}));

interface Props {
  assignment: Assignment;
  color: string;
}

const AssignmentBox = ({ assignment, color }: Props) => {
  const classes = useStyles();

  return (
    <Grid
      item
      sx={{
        margin: "0 auto",
        width: "430px",
      }}
    >
      <div className={classes.color} style={{ backgroundColor: color }}></div>

      <div className={classes.cardContainer}>
        <ItemCard item={assignment.musician} />
        <ItemCard item={assignment.instrument} />
      </div>
    </Grid>
  );
};

export default AssignmentBox;
