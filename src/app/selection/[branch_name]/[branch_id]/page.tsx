import SelectionContainer from "@/components/SelectionContainer";
import { getAllEnsemblesByBranch } from "@/utils/api/ensembles";
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
  const ensemblesData = await getAllEnsemblesByBranch(branchId);
  const instrumentsData = await getAllInstruments();

  return (
    <SelectionContainer
      musiciansData={musiciansData}
      instrumentsData={instrumentsData}
      ensemblesData={ensemblesData}
      branch={{
        branch_name: decoded_branch_name as Branch_Name,
        branch_id: branchId,
        image: "",
      }}
      // branchName={decoded_branch_name as Branch_Name}
    />
  );
}
