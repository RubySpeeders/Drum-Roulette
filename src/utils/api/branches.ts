export default async function getBranches() {
  const res = await fetch(`${process.env.BASEURL}/api/branches`);

  return res.json();
}
