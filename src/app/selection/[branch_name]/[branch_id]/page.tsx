import SelectionContainer from "@/components/SelectionContainer";
import getAllInstruments from "@/utils/api/instruments";
import { getAllMusiciansByBranch } from "@/utils/api/musicians";
import { kebabCase } from "lodash";

export default async function Selection({
  params,
}: {
  params: { branch_name: Branch_Name; branch_id: string };
}) {
  const decoded_branch_name = kebabCase(decodeURI(params.branch_name));
  const branchId = Number(params.branch_id);

  const musiciansData = await getAllMusiciansByBranch(
    decoded_branch_name as Branch_Name
  );
  const instrumentsData = await getAllInstruments();

  return (
    <SelectionContainer
      musiciansData={musiciansData}
      instrumentsData={instrumentsData}
      branch={{
        branch_name: decoded_branch_name as Branch_Name,
        branch_id: branchId,
        image: "",
      }}
    />
  );
}
