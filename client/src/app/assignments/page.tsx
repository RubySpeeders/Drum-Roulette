"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";

import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";

import { Assignment } from "@/interfaces/assignment";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 5em",
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
