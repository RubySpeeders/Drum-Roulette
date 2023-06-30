import { StaticImageData } from "next/image";

export interface Musician {
  id: number;
  name: string;
  selected: boolean;
  img: StaticImageData;
}
