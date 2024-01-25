export default async function getMusicians(name: string) {
  const res = await fetch(
    `https://fryxz3d12d.execute-api.us-east-1.amazonaws.com/production/musicians/${name}`
  );

  return res.json();
}
