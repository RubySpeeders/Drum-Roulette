import { StaticImageData } from "next/image";
export interface Instrument {
  id: number;
  name: string;
  selected: boolean;
  img: StaticImageData;
}
