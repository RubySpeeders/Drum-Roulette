"use client";

import { Typography, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { Assignment } from "@/interfaces/assignment";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import Header from "@/components/headerLogo";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 5em",
  },
  logoContainer: {
    marginBottom: "3rem",
    maxWidth: "90vw",
    width: "18rem",
    height: "2rem",
    position: "relative",
  },
  buttonContainer: {
    marginTop: "2rem",
    marginLeft: "2rem",
    width: "18rem",
    position: "relative",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "2%",
  },
  image: {
    width: 200,
    height: 200,
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.logoContainer}>
        <Header />
      </div>
      {/* <div className={classes.buttonContainer}> */}
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();

            router.push("/selection");
          }}
          type={"button"}
        >
          Return to Selection Page
        </Button>
      </div>
      {assignments.map((assignment: Assignment) => {
        return (
          <div
            key={assignment.musician.musician_id}
            className={classNames(classes.container)}
          >
            <div className={classNames(classes.card)}>
              <div className={classNames(classes.image)}>
                <Image
                  priority
                  src={assignment.musician.image}
                  alt={`assigned musician is ${assignment.musician.first_name}`}
                  width={200}
                  height={280}
                />
              </div>
              <Typography>{assignment.musician.first_name}</Typography>
            </div>
            <div className={classNames(classes.card)}>
              <div className={classNames(classes.image)}>
                <Image
                  src={assignment.instrument.image}
                  alt={`assigned instrument is ${assignment.instrument.name}`}
                  width={200}
                  height={200}
                />
              </div>
              <Typography>{assignment.instrument.name}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}
