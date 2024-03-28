import { Instrument } from "./instrument";
import { Musician } from "./musician";

export interface Assignment {
  id: number;
  musician: Musician;
  instrument: Instrument;
}
