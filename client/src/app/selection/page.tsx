import Selector from "@/components/selector";
import getMusicians from "@/utils/api/getMusicians";

export default async function Selection() {
  //branch will eventually be passed from the landing page
  const hardCodeBranch = { branch_id: 1, branch_name: "navy" };
  const musiciansData = await getMusicians(hardCodeBranch);
  //instruments will come from the db eventually, so moving this here where we will do a fetch for instruments in the future
  const instruments = [
    {
      id: 1,
      name: "Bass Drum",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/BD_pic.png",
    },
    {
      id: 2,
      name: "Snare Drum",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/SD_pic.png",
    },
    {
      id: 3,
      name: "Tenor Drum",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/TD_pic.png",
    },
    {
      id: 4,
      name: "Cymbals",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/Cym_pic.png",
    },
    {
      id: 5,
      name: "BD & Cym",
      selected: false,
      img: "https://server.pickyourdrum.link/files/instruments/BD_Cym_pic.png",
    },
  ];

  return (
    <Selector
      musiciansData={musiciansData.musicians}
      instrumentsData={instruments}
    />
  );
}
