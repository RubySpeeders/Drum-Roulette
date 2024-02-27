import SelectionContainer from "@/components/SelectionContainer";
import { getMusicians } from "@/utils/api/musiciansService";

export default async function Selection() {
  //branch will eventually be passed from the landing page
  const hardCodeBranch = {
    branch_id: 1,
    branch_name: "air-force",
    //TODO replace with real image, this is a placeholder to bypass typescript
    image: "https://server.pickyourdrum.link/files/instruments/BD_pic.png",
  };
  const musicians = await getMusicians();
  //instruments will come from the db eventually, so moving this here where we will do a fetch for instruments in the future
  const instruments = [
    {
      instrument_id: 1,
      name: "Bass Drum",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/BD_pic.png",
    },
    {
      instrument_id: 2,
      name: "Snare Drum",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/SD_pic.png",
    },
    {
      instrument_id: 3,
      name: "Tenor Drum",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/TD_pic.png",
    },
    {
      instrument_id: 4,
      name: "Cymbals",
      selected: false,
      image: "https://server.pickyourdrum.link/files/instruments/Cym_pic.png",
    },
    {
      instrument_id: 5,
      name: "BD & Cym",
      selected: false,
      image:
        "https://server.pickyourdrum.link/files/instruments/BD_Cym_pic.png",
    },
  ];

  return (
    <SelectionContainer
      musiciansData={musicians}
      instrumentsData={instruments}
    />
  );
}
