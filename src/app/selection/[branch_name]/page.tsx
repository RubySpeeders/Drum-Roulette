import SelectionContainer from "@/components/SelectionContainer";
import { Branch_Name } from "@/interfaces/branch_name";
import getAllInstruments from "@/utils/api/getAllInstruments";
import { getAllMusiciansByBranch } from "@/utils/api/musicians";
import { kebabCase } from "lodash";

export default async function Selection({
  params,
}: {
  params: { branch_name: Branch_Name };
}) {
  const decoded_branch_name = kebabCase(decodeURI(params.branch_name));
  console.log("branch!", decoded_branch_name);
  const musiciansData = await getAllMusiciansByBranch(
    decoded_branch_name as Branch_Name
  );
  const instrumentsData = await getAllInstruments();

  return (
    <SelectionContainer
      musiciansData={musiciansData}
      instrumentsData={instrumentsData}
    />
  );
}
