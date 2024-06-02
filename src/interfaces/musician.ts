import { Band } from "./band";
import { Branch } from "./branch";
import { Ensemble } from "./ensemble";

export interface Musician {
  first_name: string;
  image: string;
  last_name: string;
  musician_id: number;
  branch: Branch;
  band: Band;
  selected: boolean;
  ensemble_name: string;
  ensemble_id: number;
}
