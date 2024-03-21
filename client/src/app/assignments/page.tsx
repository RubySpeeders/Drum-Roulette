"use client";

// React/ Next.js Imports
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Button, Typography, Box } from "@mui/material";

// Type/ Interface Imports
import { Assignment } from "@/interfaces/assignment";

// Styles or CSS Imports
import classNames from "classnames";
import { ItemCard } from "@/components/ItemCard";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 5em",
  },
  message: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "830px",
    minHeight: "95px",
  },
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

export default function Assignments() {
  const classes = useStyles();
  const router = useRouter();
  const searchParams = useSearchParams();

  const assignments = JSON.parse(searchParams.get("assignments") as string);

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
          Your assignments have been generated!
        </Typography>
      </Box>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {assignments.map((assignment: Assignment) => {
          return (
            <div
              key={assignment.musician.musician_id}
              className={classes.container}
            >
              <ItemCard item={assignment.musician} />
              <ItemCard item={assignment.instrument} />
            </div>
          );
        })}
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
    </>
  );
}
