import getBranches from "@/utils/api/getBranches";
import Landing from "../components/landing";

export default async function Home() {
  const branchesData = await getBranches();

  return <Landing branches={branchesData.branches} />;
}
