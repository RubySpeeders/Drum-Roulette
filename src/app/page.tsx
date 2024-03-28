import getBranches from "@/utils/api/branches";
import Landing from "@/components/Landing";

export default async function Home() {
  const branchesData = await getBranches();
  console.log(branchesData);

  return <Landing branches={branchesData} />;
}
