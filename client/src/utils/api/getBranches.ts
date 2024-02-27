export default async function getBranches() {
  return await fetch(`${process.env.BASEURL}/api/branches`);
}
