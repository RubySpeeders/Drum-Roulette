"use client";

// React/ Next.js Imports
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";

// Type/ Interface Imports
import { Assignment } from "@/interfaces/assignment";

// Component Imports
import AssignmentBox from "@/components/AssignmentBox";

const useStyles = makeStyles(() => ({
  subtitle: {
    fontSize: "2rem",
    margin: "1rem 0 2rem 0",
  },
  buttonContainer: {
    margin: "3rem 2rem",
    padding: "5px",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  returnLink: {
    marginTop: "2rem",
    textDecoration: "underline white 0.1rem solid",
  },
  linkText: {
    color: "white",
    fontSize: "2rem",
  },
}));

const ASSIGNMENT_COLORS = ["#8763C4", "#D1A4CF", "#E9E5F3", "#D745D1"];

export default function Assignments() {
  const classes = useStyles();
  const router = useRouter();
  const searchParams = useSearchParams();

  const assignments = JSON.parse(searchParams.get("assignments") as string);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "0 3rem" }}
    >
      <h3 className={classes.subtitle}>
        Your assignments have been generated!
      </h3>
      <Grid container spacing={4}>
        {assignments.map((assignment: Assignment, i: number) => (
          <AssignmentBox
            key={assignment.id}
            assignment={assignment}
            // cycles through each of the 4 assignment colors
            color={ASSIGNMENT_COLORS[i % 4]}
          />
        ))}
      </Grid>

      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();

            router.push("/selection");
          }}
          type={"button"}
          sx={{
            borderRadius: "3.75em",
            fontSize: "1rem",
            padding: ".75em 4.75em",
          }}
        >
          Return to Selection Page
        </Button>
        <div className={classes.returnLink}>
          <Link href="/">
            <Typography className={classes.linkText}>
              Return to homepage
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
