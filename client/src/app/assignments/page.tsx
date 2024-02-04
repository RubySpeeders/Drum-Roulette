"use client";

// React/ Next.js Imports
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Library Imports
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";

// Type/ Interface Imports
import { Assignment } from "@/interfaces/assignment";

// Styles or CSS Imports
import classNames from "classnames";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 5em",
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      {assignments.map((assignment: Assignment) => {
        return (
          <div
            key={assignment.musician.musician_id}
            className={classNames(classes.container)}
          >
            <div className={classNames(classes.card)}>
              <div className={classNames(classes.image)}>
                {assignment.musician.image ? (
                  <Image
                    style={{ width: "auto", height: "280px" }}
                    priority
                    src={assignment.musician.image}
                    alt={`assigned musician is ${assignment.musician.first_name}`}
                    width={200}
                    height={280}
                  />
                ) : (
                  <Image
                    style={{ width: "auto", height: "auto" }}
                    priority
                    src="/assets/images/default-avatar-dark.svg"
                    alt={`assigned musician is ${assignment.musician.first_name}`}
                    width={200}
                    height={200}
                  />
                )}
              </div>
              <Typography>{assignment.musician.first_name}</Typography>
            </div>
            <div className={classNames(classes.card)}>
              <div className={classNames(classes.image)}>
                <Image
                  style={{ width: "auto", height: "auto" }}
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
      <div className={classNames(classes.buttonContainer)}>
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
        <div className={classNames(classes.returnLink)}>
          <Link href="/">
            <Typography color="white">Return to homepage</Typography>
          </Link>
        </div>
      </div>
      {/* <div className={classNames(classes.buttonContainer)}>
        <Link href="/">
          <Typography color="white">Return to homepage</Typography>
        </Link>
      </div> */}
    </div>
  );
}
