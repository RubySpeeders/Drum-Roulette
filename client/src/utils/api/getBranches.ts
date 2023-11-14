export default async function getBranches() {
  const res = await fetch(
    `https://fryxz3d12d.execute-api.us-east-1.amazonaws.com/develop/branches`
  );

  return res.json();
}
