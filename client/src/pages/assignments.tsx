import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";
import { Assignment } from "@/interfaces/assignment";

export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const router = useRouter();
  const { musicians, instruments } = router.query;
  const parsedMusicians = musicians ? JSON.parse(musicians as string) : [];
  const parsedInstruments = instruments
    ? JSON.parse(instruments as string)
    : [];
  const assign = (musicians: Musician[], instruments: Instrument[]) => {
    const shuffledMusicians = shuffle(musicians);
    const shuffledNames = shuffle(
      musicians.filter((musician) => musician.selected)
    );
    const shuffledInstruments = shuffle(instruments);
    const nextAssignment = shuffledMusicians.map((musician, i) => {
      return { musician: musician, instrument: shuffledInstruments[i], id: i };
    });
    setAssignments(nextAssignment);
  };

  useEffect(() => {
    assign(parsedMusicians, parsedInstruments);
  }, []);

  return (
    <div>
      {assignments.map((assignment) => {
        return (
          <Card
            style={{ border: "solid pink", margin: ".25em", width: "50em" }}
            key={assignment.id}
          >
            <CardContent>
              <Typography>Name: {assignment.musician.name}</Typography>
              <Typography>Instrument: {assignment.instrument.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
