export async function getAllEnsembles() {
  const res = await fetch(`${process.env.BASEURL}/api/ensembles`);

  return res.json();
}

export async function getAllEnsemblesByBranch(branch_id: Number) {
  const res = await fetch(`${process.env.BASEURL}/api/ensembles/${branch_id}`);
  return res.json();
}
