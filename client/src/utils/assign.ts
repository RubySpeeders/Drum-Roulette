import { Instrument } from "@/interfaces/instrument";
import { Musician } from "@/interfaces/musician";
import { shuffle } from "lodash";

export default function assign(
  musicians: Musician[],
  instruments: Instrument[]
) {
  const selectedMusicians = musicians.filter((musician) => musician.selected);
  const selectedInstruments = instruments.filter(
    (instrument) => instrument.selected
  );

  const shuffledMusicians = shuffle(selectedMusicians);
  const shuffledInstruments = shuffle(selectedInstruments);

  const assignment = shuffledMusicians.map((musician, i) => {
    return { musician: musician, instrument: shuffledInstruments[i], id: i };
  });

  return assignment;
}
