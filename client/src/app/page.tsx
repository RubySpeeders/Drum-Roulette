import getBranches from "@/utils/api/getBranches";
import Landing from "@/components/Landing";

export default async function Home() {
  const branchesData = await getBranches();

  return <Landing branches={branchesData.branches} />;
}
