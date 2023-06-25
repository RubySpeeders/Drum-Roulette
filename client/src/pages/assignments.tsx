import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

interface Assignment {
  name: string;
  instrument: string;
}
export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    { name: "Chad", instrument: "bass drum" },
  ]);
  return (
    <div>
      {assignments.map((assignment) => {
        return (
          <Card
            style={{ border: "solid pink", margin: ".25em", width: "50em" }}
            key={assignment.name}
          >
            <CardContent>
              <Typography>Name: {assignment.name}</Typography>
              <Typography>Instrument: {assignment.instrument}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
