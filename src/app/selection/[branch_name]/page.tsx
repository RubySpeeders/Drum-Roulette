import SelectionContainer from "@/components/SelectionContainer";
import { getAllEnsemblesByBranch } from "@/utils/api/ensembles";
import getAllInstruments from "@/utils/api/instruments";
import { getAllMusiciansByBranch } from "@/utils/api/musicians";
import { kebabCase } from "lodash";

export default async function Selection({
  params,
}: {
  params: { branch_name: Branch_Name };
}) {
  const decoded_branch_name = kebabCase(decodeURI(params.branch_name));
  const musiciansData = await getAllMusiciansByBranch(
    decoded_branch_name as Branch_Name
  );

  const EnsemblesData = await getAllEnsemblesByBranch(1);
  const instrumentsData = await getAllInstruments();

  return (
    <SelectionContainer
      musiciansData={musiciansData}
      instrumentsData={instrumentsData}
      ensemblesData={EnsemblesData}
      branchName={decoded_branch_name as Branch_Name}
    />
  );
}
