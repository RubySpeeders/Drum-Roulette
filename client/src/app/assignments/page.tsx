"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

import { Assignment } from "@/interfaces/assignment";
import { ItemCard } from "@/components/ItemCard";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 5em",
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
            className={classes.container}
          >
            <ItemCard item={assignment.musician} />
            <ItemCard item={assignment.instrument} />
          </div>
        );
      })}
    </div>
  );
}
