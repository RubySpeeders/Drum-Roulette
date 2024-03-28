export async function getAllMusicians() {
  const res = await fetch(`${process.env.BASEURL}/api/musicians`);
  return res.json();
}

export async function getAllMusiciansByBranch(branch_name: Branch_Name) {
  console.log("helper", branch_name);
  const res = await fetch(
    `${process.env.BASEURL}/api/musicians/${branch_name}`
  );
  return res.json();
}
