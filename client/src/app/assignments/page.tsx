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
  buttonContainer: {
    margin: "6rem 2rem",
    padding: "5px",
    width: "80%",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  returnLink: {
    marginTop: "2rem",
    textDecoration: "underline white 0.100rem solid",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "2%",
  },
  image: {
    width: 150,
    height: 150,
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
  },
}));

const ASSIGNMENT_COLORS = ["#8763C4", "#D1A4CF", "#E9E5F3", "#D745D1"];

export default function Assignments() {
  const classes = useStyles();
  const router = useRouter();
  const searchParams = useSearchParams();

  const assignments = JSON.parse(searchParams.get("assignments") as string);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Grid container spacing={4} sx={{ padding: "0 3rem" }}>
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
          style={{
            borderRadius: "3.75em",
            fontSize: "1rem",
            padding: ".75em 4.75em",
          }}
        >
          Return to Selection Page
        </Button>
        <div className={classes.returnLink}>
          <Link href="/">
            <Typography color="white">Return to homepage</Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
