import { Band } from "./band";
import { Branch } from "./branch";

export interface Musician {
  first_name: string;
  image: string;
  last_name: string;
  user_id: number;
  branch: Branch;
  band: Band;
  selected: boolean;
}
