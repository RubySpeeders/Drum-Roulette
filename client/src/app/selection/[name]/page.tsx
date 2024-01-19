import SelectionContainer from "@/components/SelectionContainer";
import getMusicians from "@/utils/api/getMusicians";
import { kebabCase } from "lodash";

interface Props {
  params: {name: string}
}

export default async function Selection({params}: Props) {
  const musiciansData = await getMusicians(kebabCase(decodeURI(params.name)));
  //instruments will come from the db eventually, so moving this here where we will do a fetch for instruments in the future
  const instruments = [
    {
      id: 1,
      name: "Bass Drum",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/BD_pic.png",
    },
    {
      id: 2,
      name: "Snare Drum",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/SD_pic.png",
    },
    {
      id: 3,
      name: "Tenor Drum",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/TD_pic.png",
    },
    {
      id: 4,
      name: "Cymbals",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/Cym_pic.png",
    },
    {
      id: 5,
      name: "BD & Cym",
      selected: false,
      image:
        "https://server.pickyourdrum.link/files/instruments/BD_Cym_pic.png",
    },
  ];

  return (
    <SelectionContainer
      musiciansData={musiciansData.musicians}
      instrumentsData={instruments}
    />
  );
}
