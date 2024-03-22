"use client";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

// Type/ Interface Imports
import { Assignment } from "@/interfaces/assignment";

// Component Imports
import { ItemCard } from "@/components/ItemCard";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "3rem 1rem",
    border: ".12em dashed #E9E5F3",
    borderRadius: "12px",
    position: "relative",
  },
  color: {
    height: "3rem",
    width: "15.5rem",
    borderRadius: "60px",
    margin: "0 auto -1.5rem auto",
    position: "relative",
    zIndex: "5",
  },
}));

interface Props {
  assignment: Assignment;
  color: string;
}

const AssignmentBox = ({ assignment, color }: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} assignmentsGrid={6} sx={{ minWidth: "30rem" }}>
      <div className={classes.color} style={{ backgroundColor: color }}></div>

      <div className={classes.cardContainer}>
        <ItemCard item={assignment.musician} />
        <ItemCard item={assignment.instrument} />
      </div>
    </Grid>
  );
};

export default AssignmentBox;
