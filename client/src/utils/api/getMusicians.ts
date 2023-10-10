import { Branch } from "@/interfaces/branch";

export default async function getMusicians(branch: Branch) {
  const res = await fetch(
    `https://fryxz3d12d.execute-api.us-east-1.amazonaws.com/production/musicians/${branch.branch_name}`
  );

  return res.json();
}
