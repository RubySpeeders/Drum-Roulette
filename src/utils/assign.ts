import { Instrument } from "@/interfaces/instrument";
import { Musician } from "@/interfaces/musician";
import { shuffle } from "lodash";

export default function assign(
  musicians: Musician[],
  instruments: Instrument[]
) {
  const shuffledMusicians = shuffle(musicians);
  const shuffledInstruments = shuffle(instruments);

  const assignment = shuffledMusicians.map((musician, i) => {
    return { musician: musician, instrument: shuffledInstruments[i], id: i };
  });

  return assignment;
}
